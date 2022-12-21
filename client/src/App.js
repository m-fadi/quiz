import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizContext } from "./utils/Context";
import {  useState } from "react";

import Quiz from "./Components/Quiz";
import QuizConfig from "./pages/QuizConfig";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
export default function App() {
    const [gameState, setGameState] = useState("menu");
    const [dataLoaded, setDataLoaded] = useState(true);
    return (
        <BrowserRouter>
            <Container maxWidth="sm">
               
                <Box textAlign="center" mt={5}>
                    <div className="App">
                        <QuizContext.Provider
                            value={{
                                gameState,
                                setGameState,
                                setDataLoaded,
                                dataLoaded,
                            }}
                        >
                            <Routes>
                                <Route path="/quiz" element={<Quiz />}></Route>

                                {/* <Route path="/score" element={<Score />}></Route> */}
                            </Routes>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<QuizConfig />}
                                ></Route>

                                {/* <Route path="/score" element={<Score />}></Route> */}
                            </Routes>
                            {/* {gameState === "menu" && <QuizConfig />} */}
                            {/* {gameState === "quiz" && <Quiz />} */}
                        </QuizContext.Provider>
                    </div>
                </Box>
            </Container>
        </BrowserRouter>
    );
}

// {/* <BrowserRouter>
//     <Container maxWidth="sm">
//         {/* <nav></nav> */}
//     //     <Box textAlign="center" mt={5}>
//     //         <Routes>
//     //             <Route path="/quiz" element={<Quiz />}></Route>
//     //             <Route path="/" element={<QuizConfig />}></Route>
//     //             <Route path="/quiz" element={<Quiz />}></Route>
//     //             <Route path="/score" element={<Score />}></Route>
//     //         </Routes>
//     //     </Box>
//     // </Container>
// </BrowserRouter>; */}
