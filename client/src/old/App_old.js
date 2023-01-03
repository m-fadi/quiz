import "./styles.css";
import { QuizContext } from "./utils_old/Context";
import { React, useState } from "react";
//import MainMenu from "./Components/MainMenu";
//import Quiz from "./Components/Quiz";
//import Quiz from "./Components/Quiz";

export default function App() {
    const [gameState, setGameState] = useState("menu");
    const [dataLoaded, setDataLoaded] = useState(true);
    return (
        <div className="App">
            <QuizContext.Provider
                value={{ gameState, setGameState, setDataLoaded, dataLoaded }}
            >
                {/* {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />} */}
            </QuizContext.Provider>
        </div>
    );
}
