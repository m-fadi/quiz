import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../utils/Context.js";
import { nanoid } from "nanoid";
import Question from "../Components/Question";
import { useSelector } from "react-redux";

//import { useNavigate } from "react-router-dom";
//---------------------------------------------------------------------------------------//
export default function Quiz() {
    const { setDataLoaded, dataLoaded } =
        useContext(QuizContext);
    const questions = useSelector((state) => state.questions);
    const { category } = useSelector((state) => state.quiz); // used for the scoreMsg

    const [quizData, setQuizData] = useState([]);
    const [score, setScore] = useState(0);
    const [buttonText, setButtonText] = useState("Finish Quiz");
   
    const [finished, setFinished] = useState(false);
    
    

    //---------------------------------------------------------------------------------------//

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
        location.replace("/");
    };
    const finishQuiz = () => {
        if (finished) resetQuiz();
        else {
            quizData.map((question) =>
                question.allAnswers.map((choice) => {
                    if (choice.isHeld) {
                       
                        if (!choice.isCorrect) {
                            question.style = { color: "red" };
                           

                            choice.style = { background: "red" };
                        } else {
                            setScore((prev) => prev + 1);
                            
                            question.style = { color: "green" };
                            choice.style = {
                                background: "green",
                            };
                        }
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
                style={question.style}
                id={question.id}
                key={question.id}
                question={question.question}
                allAnswers={question.allAnswers}
                updateHeld={updateHeld}
                finished={finished}
            />
        );
    });

    // const scoreMsgTxt =
    //     score >= quizData.length / 2
    //         ? `congratulation you scored ${score} of ${quizData.length} your knowledge in ${category.name} is good`
    //         : `sorry you scored ${score} of ${quizData.length} your knowledge in ${category.name} is not that good`;
    const styles =
        score >= quizData.length / 2 ? { color: "green" } : { color: "red" };

    console.log("question elements in quiz", questionElements);
    if (questions.length === 0) {
        location.replace("/");
        return;
    }
    return (
        <div className="quiz">
            {dataLoaded ? (
                <div className="dataLoading"></div>
            ) : (
                <div>
                    {questionElements}

                    <div className="finish">
                        <p style={styles}>
                            {finished &&
                                (score >= quizData.length / 2
                                    ? `congratulation you scored ${score} of ${quizData.length} your knowledge in ${category.name} is good`
                                    : `sorry you scored ${score} of ${quizData.length} your knowledge in ${category.name} is not that good`)}
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
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
