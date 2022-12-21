import { useSelector, useDispatch } from "react-redux";
//import { updateIsHeld } from "../redux/questionsSlice";
import { useContext, useEffect, useState } from "react";
const Option = (props) => {
    //const questions = useSelector((state) => state.questions);
    // const { questionId } = props;
    // const finished = true;
    // const questions = useSelector((state) => state.questions);
    //const [quizData, setQuizData] = useState(questions);
    //dispatch(updateIsHeld({ isHeld: true, quesId:questionId,optionId:e.target.id}));
console.log("option component rerendered");
    console.log("all answers", props.allAnswers);
    const optionsList = props.allAnswers.map((option, index) => {
        if (option.isHeld) console.log("held option", option);
        const styles = { background: option.isHeld ? "lightblue" : "white" };
        return (
            <div
                // style={!finished ? styles : option.style}
                style={{ styles }}
                className="option"
                id={index}
                onClick={() => props.updateIsHeld(props.questionId, option.id)} // dispatch (style:clor: lightblue/ isHeld:true)
                key={index} // key: correctAnswer
            >
                {option.value}
            </div>
        );
    });
    return <div className="options">{optionsList}</div>;
};

export default Option;
