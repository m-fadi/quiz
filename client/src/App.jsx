import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizConfig from "./pages/QuizConfig";
import Quiz from "./Components/Quiz";
import Score from "./pages/Score";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Registration from "../src/pages/Registration";
import Profile from "../src/Components/Profile";
import Login from '../src/Components/Login'


const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="sm">
                {/* <nav></nav> */}
                <Box textAlign="center" mt={5}>
                    <Routes>
                        <Route path="/quiz" element={<Quiz />}></Route>
                        <Route path="/profile" element={<Profile  />}></Route>
                        <Route path="/" element={<QuizConfig />}></Route>
                        <Route path="/quiz" element={<Quiz />}></Route>
                        <Route path="/score" element={<Score />}></Route>
                        
                    </Routes>
                </Box>
            </Container>
        </BrowserRouter>
    );
};

export default App;
