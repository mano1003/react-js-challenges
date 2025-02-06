import { useState, useEffect, useRef } from "react";
// useFetchData Custom Hook
const useFetchData = (apiUrl, interval = 5000) => {
    const dataRef = useRef(null);
    const [, forceRender] = useState(0); // Dummy state to force updates selectively

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                if (isMounted) {
                    dataRef.current = result;
                    forceRender((prev) => prev + 1); // Force re-render when new data arrives
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, interval);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [apiUrl, interval]);

    return dataRef;
};

export default useFetchData;