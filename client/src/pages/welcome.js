import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Registration"
import Home from "./Home"
//import Login from "./login";
//import ResetPassword from "./resetPassword";

export default function Welcome() {
    return (
        <div id="welcome">
            

            {/* <img className="logo-img" src="../images/logo.jpeg" /> */}
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Registration />}></Route>
                        <Route path="/register" element={<Registration />}></Route>
                         <Route path="/Home" element={<Home />}></Route> 
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
