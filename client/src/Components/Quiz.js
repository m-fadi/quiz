import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../utils/Context.js";
import { nanoid } from "nanoid";
import Question from "../Components/Question";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
export default function Quiz() {
    const { gameState, setGameState, setDataLoaded, dataLoaded } =
        useContext(QuizContext);
    const questions = useSelector((state) => state.questions);
    const [quizData, setQuizData] = useState([]);
    const [score, setScore] = useState(0);
    const [butttonText, setButtonText] = useState("Finish Quiz");
    const [finished, setFinished] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("questions in Quiz on submit quiz", questions);
        
        setQuizData(questions);
        setDataLoaded(false);
    }, []);

    const updateHeld = (quesId, chId) => {
        setQuizData((prev) => {
            return prev.map((question) => {
                if (question.id !== quesId) {
                    return question;
                } else {
                    const newAnswers = question.allAnswers.map((answer) => {
                        return answer.id === chId
                            ? { ...answer, isHeld: !answer.isHeld }
                            : { ...answer, isHeld: false };
                    });
                    return { ...question, allAnswers: newAnswers };
                }
            });
        });
    };
    const resetQuiz = () => {
        setFinished(false);
        setScore(0);

        setDataLoaded(true);
        setQuizData([]);
        navigate("/");
        location.reload();
    };
    const finishQuiz = () => {
        if (finished) resetQuiz();
        else {
            quizData.map((question) =>
                question.allAnswers.map((choice) => {
                    console.log("choice.value", choice);

                    if (choice.isHeld) {
                        //if (choice.value !== question.correct_answer) {
                        if (!choice.isCorrect) {
                            choice.styless = { background: "red" };
                        } else {
                            setScore((prev) => prev + 1);

                            choice.styless = {
                                background: "lightgreen",
                            };
                        }
                    } else {
                        choice.isCorrect &&
                            (choice.styless = { background: "lightgreen" });
                    }
                })
            );
        }
        setFinished(true);
        setButtonText("Try again");
    };

    const questionElements = quizData.map((question) => {
        return (
            <Question
                id={question.id}
                key={question.id}
                question={question.question}
                allAnswers={question.allAnswers}
                updateHeld={updateHeld}
                finished={finished}
            />
        );
    });
    console.log("question elements in quiz", questionElements);
    return (
        <div className="quiz">
            {dataLoaded ? (
                <div className="dataLoading">is Loading...</div>
            ) : (
                <div>
                    {questionElements}

                    <div className="finish">
                        <p>
                            your score is: {score}/{quizData.length}
                        </p>
                        <div className="quiz-btns">
                            <button
                                className="finish-btn start-over-btn "
                                onClick={() => resetQuiz()}
                            >
                                start over
                            </button>
                            <button
                                className="finish-btn"
                                onClick={() => finishQuiz()}
                            >
                                {butttonText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
/* <div className="quiz">
{isLoading ? (
  <div className="quiz__loading--box">
    <h3 className="quiz__loading--text">One moment please...</h3>
  </div>
) : (
  <div className="quiz">
    {questionElements}
    {buttonElements()}
  </div>
)}
<img className="yellowBlob" src={yellowBlob} alt="" />
<img className="blueBlob" src={blueBlob} alt="" />
</div>
); */
