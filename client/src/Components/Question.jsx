import he from "he";
import { useSelector, useDispatch } from "react-redux";
import Option from "./Option";
export default function Question(props) {
    const questions = useSelector((state) => state.questions.questions);

    // const questionList =  questions.map((question, index) => {
    //const styles = { background: choice.isHeld ? "lightblue" : "" };
    //console.log(choice.styless)

    const questionList = questions.map((question, index) => {
        return (
            <div className="question" key={index}>
                <h2 className="question-text">
                    {he.decode(question.questionText)}
                </h2>
                <Option
                    allAnswers={question.allAnswers}
                    questionId={question.id}
                    
                />
            </div>
        );
    });
   
    return <div>{questionList}</div>;

}
