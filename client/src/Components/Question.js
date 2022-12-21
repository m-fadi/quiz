import he from "he";

export default function Question(props) {
    const choices = props.allAnswers.map((choice,index) => {
        const styles = { background: choice.isHeld ? "lightblue" : "" };
        //console.log(choice.styless)
        return (
            <div
                style={!props.finished ? styles : choice.styless}
                className="choice"
                onClick={() => props.updateHeld(props.id, choice.id)}
                key={index}
            >
                {he.decode(choice.value)}
            </div>
        );
    });
    ///console.log(choices) margin:0;
    return (
        <div className="question">
            <p>{he.decode(props.question)}</p>
            <div className="choices">{choices}</div>
        </div>
    );
}
