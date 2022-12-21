import { useContext } from "react";
import { QuizContext } from "../utils/Context.js";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="main-menu">
      <h2> Quizzical</h2>
      <p> Quiz of ten Questions</p>
    <button className="start-btn" onClick={() => setGameState("quiz")}>
      Start Quiz
    </button>
    </div>
  );
}
