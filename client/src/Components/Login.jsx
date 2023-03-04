// import React from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//     const [error, setError] = React.useState("");
//     const [formData, setFormData] = React.useState({
//         email: "",
//         password: "",
//     });

//     function handleChange(e) {
//         setFormData((prevFormData) => {
//             return {
//                 ...prevFormData,
//                 [e.target.name]: e.target.value,
//             };
//         });
//     }
//     function handleSubmit(e) {
//         e.preventDefault();

//         fetch("/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((result) => {
//                 console.log("results in app", result.data);
//                 return result.success
//                     ? location.replace("/profile") //location.reload() /////////////////////////How ??????
//                     : setError(result.message);
//             });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <h5 className="errorMessage">{error}</h5>
//                 <input
//                     type="text"
//                     placeholder="email"
//                     onChange={handleChange}
//                     name="email"
//                     className="log-input"
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     onChange={handleChange}
//                     placeholder="Password"
//                     className="login-input"
//                 ></input>
//                 <button className="login-input" type="submit">
//                     {" "}
//                     Login{" "}
//                 </button>
//             </form>
//             <br />
//             <Link to="/register"> click here to register</Link>
//             <br />
//             <br />

//             <Link to="/resetPassword">
//                 {" "}
//                 Forgot you password ? click to reset
//             </Link>
//         </div>
//     );
// }

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../redux/userDataSlice";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            body: JSON.stringify({ email: username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log("response", response.data);
                if (response.success) {
                    dispatch(setUserData(response.data));
                    location.replace("/profile");
                } else {
                    console.log("no success");
                }
            })
            .catch((error) => {
                // handle error
            });
    };

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="username"
                label="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <TextField
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button variant="contained" color="primary" type="submit">
                Login
            </Button>
        </form>
    );
}
