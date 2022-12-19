import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../utils/Context.js";
import { nanoid } from "nanoid";
import Question from "../Components/Question";

export default function Quiz() {
    const { gameState, setGameState, setDataLoaded, dataLoaded } =
        useContext(QuizContext);
    const [quizData, setQuizData] = useState([]);
    const [score, setScore] = useState(0);
    const [butttonText, setButtonText] = useState("Finish Quiz");
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log("data from fetch", data);
                setQuizData(() =>
                    data.results.map((question) => {
                        const incorrectAnswers = question.incorrect_answers.map(
                            (answer) => ({
                                value: answer,
                                id: nanoid(),
                                isHeld: false,
                                isCorrect: false,
                                styless: { background: "white" },
                            })
                        );
                        const correctAnswer = {
                            value: question.correct_answer,
                            id: nanoid(),
                            isHeld: false,
                            isCorrect: true,
                        };
                        const allAnswersArray = [
                            ...incorrectAnswers,
                            correctAnswer,
                        ].sort(() => Math.random() - 0.5);
                        //if (allAnswersArray) delete question.incorrect_answers;
                        return {
                            ...question,
                            allAnswers: allAnswersArray,
                            id: nanoid(),
                        };
                    })
                );
            })
            .finally(() => setDataLoaded(false));
        console.log("dd", dataLoaded);
    }, []);
    //console.log(quizData);
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
        setGameState("menu");
        setDataLoaded(true);
    };
    const finishQuiz = () => {
        if (finished) resetQuiz();
        else {
            quizData.map((question) =>
                question.allAnswers.map((choice) => {
                    //console.log(choice.value);

                    if (choice.isHeld) {
                        choice.value !== question.correct_answer
                            ? (choice.styless = { background: "red" })
                            : (setScore((prev) => prev + 1),
                              (choice.styless = { background: "lightgreen" }));
                    } else {
                        choice.value === question.correct_answer
                            ? (choice.styless = { background: "lightgreen" })
                            : "";
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

    return (
        <div className="quiz">
            {dataLoaded ? (
                <div className="dataLoading">is Loading...</div>
            ) : (
                <div>
                    {questionElements}

                    <div className="finish">
                        <h2>
                            The Score is: {score}/{quizData.length}
                        </h2>
                        <button
                            className="finish-btn"
                            onClick={() => finishQuiz()}
                        >
                            {butttonText}
                        </button>
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
