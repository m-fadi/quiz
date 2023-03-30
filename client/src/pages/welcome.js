import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Components/Login'
import Registration from "./Registration";
import Home from "./Home";
import Profile from "../Components/Profile";
//import Login from "./login";
//import ResetPassword from "./resetPassword";

export default function Welcome() {
    return (
        <div id="welcome">
            {/* <img className="logo-img" src="../images/logo.jpeg" /> */}
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route
                            exact
                            path="/"
                            element={<Registration />}
                        ></Route>
                        <Route
                            path="/register"
                            element={<Registration />}
                        ></Route>
                        <Route
                            path="/
                         "
                            element={<Home />}
                        ></Route>
                        <Route path="/login" element={<Login />}></Route>
                        {/* <Route
                            path="/resetPassword"
                            element={<ResetPassword />}
                        ></Route> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
