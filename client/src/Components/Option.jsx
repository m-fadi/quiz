import { useSelector, useDispatch } from "react-redux";

import {

    updateIsHeld,
} from "../redux/questionsSlice";
import he from "he";

const Option = (props) => {
    const {questions, score} = useSelector((state) => state.questions);
    const { questionId } = props;
    console.log("score in option", score)
    const dispatch = useDispatch();
    console.log(
        "all answers in option",
        useSelector((state) => state.questions)
    );
    const handleClick = (e) => {
        console.log("the clicked question", questions[questionId].allAnswers);
        const updatedQuestion = questions[questionId].allAnswers.map(
            (answer) => {
                if (answer.id == e.target.id) {
                    console.log("clicked answer", answer);
                    console.log("the clicked option in options", e.target);
                    return {
                        ...answer,
                        isHeld: true,
                        styles: {background: answer.isCorrect ? "green" : "red" },
                    };
                } else {
                    return {
                        ...answer,
                        isHeld: false,
                        styles: {
                            background: answer.isCorrect ? "green" : "white",
                        },
                    };
                }
            }
        );

        dispatch(updateIsHeld({ updatedQuestion, questionId }));
    };
    const optionsList = props.allAnswers.map((option, index) => {
        const styles = { background: option.isHeld ? "lightblue" : "white" };

        return (
            <div
                style={!score ? styles : option.styles}
                className="option"
                id={option.id}
                onClick={(e) => handleClick(e)}
                key={index} 
            >
                {he.decode(option.value)}
            </div>
        );
    });
    return <div className="options">{optionsList}</div>;
};

export default Option;
