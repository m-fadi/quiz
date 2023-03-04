const createUser = async (data) => {
    console.log(data);
    const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();

    // .then((result) => result.json())

    // .then((result) => {
    console.log("results in createUser", result.result);

    return result.result;

    //     //location.reload();
    // });
};
export default createUser;
