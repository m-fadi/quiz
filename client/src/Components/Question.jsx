import he from "he";
import { useSelector, useDispatch } from "react-redux";
import Option from "./Option";
export default function Question() {
    
    const questions = useSelector((state) => state.questions);
    console.log("Questions in Questions from Store,questions",questions)
    const questionsList = questions.map((question, index) => {
       
        //const styles = { background: choice.isHeld ? "lightblue" : "" };
        //console.log(choice.styless)
         
        return (
            <div className="question" key={index}>
                <h2 className="question-text">
                    {he.decode(question.question)}
                </h2>
                <Option allAnswers={question.allAnswers} questionId={question.id} />
            </div>
        );
    });
 
    return <div>{questionsList}</div>;
}
