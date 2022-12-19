import he from "he";
import { useSelector, useDispatch } from "react-redux";

export default function Question(props) {
    const questions = useSelector((state) => state.questions);
    const choices = questions.map((question) => {
        //const styles = { background: choice.isHeld ? "lightblue" : "" };
        //console.log(choice.styless)
        return (
            <div
                style={!props.finished ? styles : choice.styless}
                className="choice"
                onClick={() => props.updateHeld(props.id, choice.id)}// dispatch (style:clor: lightblue/ isHeld:true)
                key={choice.id}// key: correctAnswer
            >
                {choice.value}
            </div>
        );
    });
    ///console.log(choices)
    return (
        <div className="question">
            <h2>{he.decode(props.question)}</h2>
            <div className="choices">{choices}</div>
        </div>
    );
}
