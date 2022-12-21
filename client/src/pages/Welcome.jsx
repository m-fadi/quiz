import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Registration";
import Quiz from "../Components/Quiz";
import QuizConfig from "./QuizConfig";
//import Home from "./Home";
//import Login from "./login";
//import ResetPassword from "./resetPassword";

export default function Welcome() {
    return (
        <div id="welcome">
            {/* <img className="logo-img" src="../images/logo.jpeg" /> */}
            <div>
                <BrowserRouter>
                    <Routes>
                        {/* <Route
                            exact
                            path="/"
                            element={<QuizConfig />}
                        ></Route> */}
                        <Route
                            path="/register"
                            element={<Registration />}
                        ></Route>
                        {/*                         
                        <Route
                            path="/"
                            element={<QuizConfig />}
                        ></Route>
                         */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
