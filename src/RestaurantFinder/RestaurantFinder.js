import React, { useEffect, useState } from "react";
// Save User Diet Preference Near By Restaurant Finder
const RestaurantFinder = () => {
  const [location, setLocation] = useState(null);
  const [diet, setDiet] = useState(() => localStorage.getItem("dietPreference") || "");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  // Save User Diet Preference to local storage and local state
  const saveDiet = (e) => {
    const value = e.target.value;
    setDiet(value);
    localStorage.setItem("dietPreference", value);
  };

  const getLocation = () => {
    // Check if geolocation is supported for the browser
    if (navigator.geolocation) {
      setLoading(true);
      // Get the current geolocation position of the user
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          alert("Geolocation failed: " + error.message);
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported.");
    }
  };

  // Fetch restaurants from Yelp API based on user location and diet preference
  const fetchRestaurants = (lat, lon, diet) => {
    setLoading(true);
    fetch(`https://api.yelp.com/v3/businesses/search?term=${diet}&latitude=${lat}&longitude=${lon}`, {
      headers: {
        Authorization: `Bearer JLn5h3tAT_HSrLMvIb1TMc5zesY82Bh9UJOao-I545nTS42YTXZvE0ObG_vN4FqlDDwK6TTyZmEtJ2jFiJRACqT4b4gu5D1e43zStY6jiY_HVChHrBRKPEY2oEToZ3Yx`
      }
    })
    .then(res => res.json())
    .then(data => setRestaurants(data.businesses.map(b => b.name)));
    setLoading(false);
  };

  useEffect(() => {
    // if location and diet are set, fetch restaurants
    if (location && diet) {
      fetchRestaurants(location.lat, location.lon, diet);
    }
  }, [location, diet]); // on change of location or diet

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>🌍 Restaurant Finder</h2>

      <label>
        Choose dietary preference:{" "}
        <select value={diet} onChange={saveDiet}>
          <option value="">--Select--</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Halal">Halal</option>
          <option value="Kosher">Kosher</option>
        </select>
      </label>

      <br /><br />
      <button onClick={getLocation}>📍 Find Restaurants Near Me</button>

      {loading && <p>Loading nearby restaurants...</p>}

      {location && (
        <p>
          Your Location: Lat {location.lat.toFixed(3)}, Lon {location.lon.toFixed(3)}
        </p>
      )}

      {restaurants.length > 0 && (
        <>
          <h3>Recommended {diet} Restaurants:</h3>
          <ul>
            {restaurants.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RestaurantFinder;