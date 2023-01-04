import { useSelector, useDispatch } from "react-redux";
import Question from "./Question";
import { updateScore } from "../redux/questionsSlice";

//-------------------------------------------------------------------//
const Quiz = () => {
    const dispatch = useDispatch();
    const { questions, score } = useSelector((state) => state.questions);
    if (!questions.length) location.replace("/");
    let count = 0;
    const submitAnswers = () => {
        questions.map((question) => {
            question.allAnswers.map((answer) => {
                if (answer.isHeld && answer.isCorrect) {
                    count++;
                }
            });
        });
        dispatch(updateScore(count));
    };
    return (
        <div>
            <div className="quiz">
                <Question />
            </div>
            <div>{score}</div>
            <button onClick={(e) => submitAnswers(e)}> submit </button>
        </div>
    );
};

export default Quiz;
