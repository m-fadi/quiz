import { useSelector } from "react-redux";
import Question from "./Question";
import { useEffect, useState } from "react";
import Choices from "../Components/Choices";
const Quiz = () => {
    console.log("Quiz component rerendered");
    const questions = useSelector((state) => state.questions);
    const [quizData, setQuizData] = useState(questions);
    if (!questions.length) location.replace("/");
    const dataLoaded = true;
    // const updateIsHeld = (quesId, chId) => {
    //     setQuizData((prev) => {
    //         return prev.map((question) => {
    //             console.log("questions in map ", question);
    //             if (question.id !== quesId) {
    //                 //console.log("not clicked questions questions in map ", question.id);
    //                 return question;
    //             } else if (question.id == quesId) {
    //                 console.log("ques id is clicked ", question);
    //                 const newAnswers = question.allAnswers.map((answer) => {
    //                     return answer.id === chId
    //                         ? { ...answer, isHeld: !answer.isHeld }
    //                         : { ...answer, isHeld: false };
    //                 });
    //                 return { ...question, allAnswers: newAnswers };
    //             }
    //         });
    //     });
    //     console.log("QuisData Quiz", quizData);
    // };
    // const questsList = questions.map((question) => {
    //     // console.log("question  in Quiz", question);

    //     return <Question key={question.id}  />;
   // });
    return (
        <div className="quiz">
            <Question  />
        </div>
    );
};

export default Quiz;
