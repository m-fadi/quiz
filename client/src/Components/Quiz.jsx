import { useSelector, useDispatch } from "react-redux";
import Question from "./Question";
import { useEffect, useState } from "react";
import { handleScore, decrementScore } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";
//-------------------------------------------------------------------//
const Quiz = () => {
    const dispatch=useDispatch()
    const questions = useSelector((state) => state.questions);
    if (!questions.length) location.replace("/")
    
    const [score, setScore] = useState(0);

    const [finished, setFinished] = useState(false);
    const [butttonText, setButtonText] = useState("Finish Quiz");

    const dataLoaded = true;
   
    // const resetQuiz = () => {
    //     setFinished(false);
    //     setScore(0);
    //     //setGameState("menu");
    //     //setDataLoaded(true);
    // };
    const submitAnswers = (e) => {
        dispatch(handleScore({questions}))
        //console.log(questions);
        // if (finished) resetQuiz();
        // else {
        //     questions.map((question) =>
        //         question.allAnswers.map((choice) => {
        //             //console.log(choice.value);
        //             if (choice.isHeld) {
        //choice.value !== question.correct_answer;
        //                     ? (choice.styless = { background: "red" })
        //                     : (setScore((prev) => prev + 1),
        //                       (choice.styless = { background: "lightgreen" }));
        //             } else {
        //                 choice.value === question.correct_answer
        //                     ? (choice.styless = { background: "lightgreen" })
        //                     : "";
        //             }
        //         })
        //     );
        // }
        // setFinished(true);
        // setButtonText("Try again");
    };
    return (
        <div>
            <div className="quiz">
                <Question />
            </div>
            <button onClick={(e)=>submitAnswers(e)}> submit </button>
        </div>
    );
};

export default Quiz;
