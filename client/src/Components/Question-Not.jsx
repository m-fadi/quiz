import he from "he";
import { useSelector, useDispatch } from "react-redux";
import Option from "./Option";
import { useContext, useEffect, useState } from "react";
export default function Question(props) {
    console.log("questins component rerendered")
    const questions = useSelector((state) => state.questions);
    const [quizData, setQuizData] = useState(questions);
    const questionsList = quizData.map((question, index) => {
        //const styles = { background: choice.isHeld ? "lightblue" : "" };
        //console.log(choice.styless)
        const updateIsHeld = (questionId, chId) => {
            console.log("option clicked");
            setQuizData((prev) => {
                return prev.map((question) => {
                    //console.log("questions in map ", question);
                    if (question.id !== questionId) {
                        //console.log("not clicked questions questions in map ", question.id);
                        return question;
                    } else if (question.id == questionId) {
                        //console.log("ques id is clicked ", question);
                        const newAnswers = question.allAnswers.map((answer) => {
                            if (answer.id === chId) {
                                console.log("clicked answer", answer);
                                return {
                                    ...answer,
                                    isHeld: !answer.isHeld,
                                    styles: { background: "blue" },
                                };
                            } else {
                                return { ...answer, isHeld: false };
                            }
                        });
                        console.log("updated answers", newAnswers);
                        return { ...question, allAnswers: newAnswers };
                    }
                });
            });
        };
       
        return (
            <div className="question" key={index}>
                <h2 className="question-text">
                    {he.decode(question.question)}
                </h2>
                <Option
                    allAnswers={question.allAnswers}
                    questionId={question.id}
                    updateIsHeld={updateIsHeld}
                />
            </div>
        );
    });

    return <div>{questionsList}</div>;
}
