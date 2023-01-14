import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../redux/userDataSlice";
import createUser  from "../utils/createUser";
export default  function Registration() {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    function handleChange(e) {
        if (e.target.value === "") setError("please fill the fields");
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });

    }

    async function handleSubmit(e) {
        e.preventDefault();
        const userData= await createUser(formData);
        dispatch(setUserData(userData))
        navigate('/profile')

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
            <Link to="/login"> click here to log in</Link>
        </div>
    );
}
