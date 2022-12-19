import { useSelector, useDispatch } from "react-redux";
import { updateIsHeld } from "../redux/questionsSlice";
const Option = (props) => {
    //const questions = useSelector((state) => state.questions);
    const { questionId } = props;
    const finished = false;
    const dispatch = useDispatch();
    const handleClick = (e) => {
        console.log("option idXXXXXXXXXXXXX", e.target);
        dispatch(updateIsHeld({ isHeld: true, quesId:questionId,optionId:e.target.id}));
    };
    const optionsList = props.allAnswers.map((option, index) => {
        const styles = { background: option.isHeld ? "lightblue" : "white" };
        
        
        return (
            <div
                style={!finished ? styles : option.styles}
                className="option"
                id={index}
                onClick={(e)=>handleClick(e)} // dispatch (style:clor: lightblue/ isHeld:true)
                key={index} // key: correctAnswer
            >
                {option.value}
            </div>
        );
    });
    return <div className="options">{optionsList}</div>;
};

export default Option;
