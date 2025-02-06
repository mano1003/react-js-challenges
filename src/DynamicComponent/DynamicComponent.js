import React from "react";
import useFetchData from "./useFetchData";

const API_URL = "https://api.coinbase.com/v2/exchange-rates?currency=ETH";

const DynamicComponent = () => {
    const dataRef = useFetchData(API_URL, 5000); // Fetches every 5 seconds

    return (
        <div>
            <h2>Dynamic Data</h2>
            {dataRef.current ? (
                <pre>{JSON.stringify(dataRef.current, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DynamicComponent;
