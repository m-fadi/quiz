import React from "react";

const fetchData = ({ url }) => {
    return fetch(url)
        .then((result) => result.json())
        .then((result) => {
            console.log("result fetchData", result);
            return result;
        })
        .catch((err) => {
            return {
                errorMsg: "something went wrong when trying to get data from the server , please try again ...!",
            };
        });
};

export default fetchData;
