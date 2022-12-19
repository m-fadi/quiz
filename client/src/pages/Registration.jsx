import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handleFirstName,
    handleLastName,
    handleEmail,
    handlePassword,
} from "../redux/userDataSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//--------------------------------------------------------------------------------------//

export default function Registration() {
    const { firstName, lastName, email, password } = useSelector(
        (state) => state.userData
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [value, setValue] = useState("");
    const formData = { firstName, lastName, email, password };
    const handleChange = (e) => {
        if (e.target.value === "") setError("please fill the fields");
        if (e.target.name === "firstName") {
            dispatch(handleFirstName(e.target.value));
        } else if (e.target.name === "lastName") {
            dispatch(handleLastName(e.target.value));
        } else if (e.target.name === "email") {
            dispatch(handleEmail(e.target.value));
        } else if (e.target.name === "password") {
            dispatch(handlePassword(e.target.value));
        }
    };
    function handleSubmit(e) {
        e.preventDefault();

        fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log("results in app", result);
                if (result.success) {
                    //navigate("/App");
                    // location.reload();
                } else setError(result.message);
            });
    }

    return (
        <div>
            <h5 className="errorMessage">{error}</h5>
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    className="register-input"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    className="register-input"
                    required
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={handleChange}
                    name="email"
                    className="register-input"
                    required
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="register-input"
                    required
                ></input>
                <button className="register-input"> Register </button>
            </form>
            {/* <Link to="/login"> click here to log in</Link> */}
        </div>
    );
}
