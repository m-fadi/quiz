import { useState, useEffect } from "react";
import fetchData from "./fetchData";

const useFetch = ({ url }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData({ url }).then((result) => {
            if (result.errorMsg) {
                setData({ errorMsg: result.errorMsg });
                return;
            }

            setData(result.trivia_categories);

            setLoading(false);
        });
    }, []);
    return { data, error, loading };
};

export default useFetch;
