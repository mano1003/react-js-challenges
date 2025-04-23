import React, { useState, useEffect, useMemo } from "react";
import { CountriesStatesCities } from "./Hierarchy_DropDown_Constants";
import { Dropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

const CountryStatesCityDropDown = ({ value }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    
    // Initialize countries
    useEffect(() => {
        setCountries(CountriesStatesCities);
    }, []);

    // Update states when country changes
    useEffect(() => {
        if (selectedCountry) {
            const country = countries.find(
                (country) => country.countryCode === selectedCountry
            );
            if (country) {
                setStates(country.states);
                setSelectedState(null); // Reset state when country changes
                setCities([]); // Reset cities when country changes
            }
        }
    }, [selectedCountry, countries]);

    // Update cities when state changes
    useEffect(() => {
        if (selectedState) {
            const state = states.find(
                (state) => state.stateCode === selectedState
            );
            if (state) {
                setCities(state.cities);
                setSelectedCity(null); // Reset city when state changes
            }
        }
    }, [selectedState, states]);
    // Update selected values when value prop changes
    useEffect(() => {
        if (value) {
            const { countryCode, stateCode, cityCode } = value;
            setSelectedCountry(countryCode);
            setSelectedState(stateCode);
            setSelectedCity(cityCode);
        }
    }, [value]);
    // Handle country selection
    const handleCountrySelect = (countryCode) => {
        setSelectedCountry(countryCode);
        setSelectedState(null); // Reset state when country changes
        setSelectedCity(null); // Reset city when country changes
    };
    // Handle state selection
    const handleStateSelect = (stateCode) => {
        setSelectedState(stateCode);
        setSelectedCity(null); // Reset city when state changes
    };
    // Handle city selection
    const handleCitySelect = (cityCode) => {
        setSelectedCity(cityCode);
    };
    
    // Memoize the dropdown items to avoid unnecessary re-renders
    const countryItems = useMemo(
        () =>
            countries.map((country) => (
                <Dropdown.Item
                    key={country.countryCode}
                    onClick={() => handleCountrySelect(country.countryCode)}
                >
                    {country.countryName}
                </Dropdown.Item>
            )),
        [countries]
    );
    const stateItems = useMemo(
        () =>
            states.map((state) => (
                <Dropdown.Item
                    key={state.stateCode}
                    onClick={() => handleStateSelect(state.stateCode)}
                >
                    {state.stateName}
                </Dropdown.Item>
            )),
        [states]
    );
    const cityItems = useMemo(
        () =>
            cities.map((city) => (
                <Dropdown.Item
                    key={city.cityCode}
                    onClick={() => handleCitySelect(city.cityCode)}
                >
                    {city.cityName}
                </Dropdown.Item>
            )),
        [cities]
    );
    // Render the dropdowns
    return (
        <>
            <br />
            <h4 style={{textAlign: 'center'}}>
                <strong>{'Country -> State -> City Hierarchical Dropdown'}</strong>
            </h4>
            <br />
            <Container>
                <Row>
                    <Col xs lg="1">
                        <span style={{verticalAlign:'-webkit-baseline-middle'}}>Country</span>
                    </Col>
                    <Col md="auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedCountry
                                    ? 
                                        countries.find(
                                            (country) =>
                                                country.countryCode === selectedCountry
                                        ).countryName
                                    
                                    : "Select Country"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>{countryItems}</Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            
                {selectedCountry && (
                    <>
                    <br />
                        <Row>
                            <Col xs lg="1">
                                <span style={{verticalAlign:'-webkit-baseline-middle'}}>State</span>
                            </Col>
                            <Col md="auto">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedState
                                            ? 
                                                states.find(
                                                    (state) =>
                                                        state.stateCode === selectedState
                                                ).stateName
                                            
                                            : "Select State"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>{stateItems}</Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </>
                )}
                {selectedState && (
                    <>
                    <br />
                        <Row>
                            <Col xs lg="1">
                                <span style={{verticalAlign:'-webkit-baseline-middle', paddingTop: '0.75rem', paddingBottom: '0.75rem'}}>City</span>
                            </Col>
                            <Col md="auto">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedCity
                                            ? 
                                                cities.find(
                                                    (city) => city.cityCode === selectedCity
                                                ).cityName
                                            
                                            : "Select City"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>{cityItems}</Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    )
}
export default CountryStatesCityDropDown;