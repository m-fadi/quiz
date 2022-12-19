import { useSelector } from "react-redux";
import Question from "./Question";
import { useEffect } from "react";
import Choices from "../Components/Choices";
const Quiz = () => {
    const questions = useSelector((state) => state.questions);

    const dataLoaded = true;
    const questsList=questions.map((question) => {
        console.log("question  in Quiz", question);
        
        return <Question key ={question.id} />;
    });
    return <div className="quiz">{questsList}</div>;
};

export default Quiz;
