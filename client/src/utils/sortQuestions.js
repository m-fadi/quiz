import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
export const sortQuestions = (questions) => {
    //const dispatch = useDispatch();
    return questions.map((question,quesIndex) => {
        //console.log("question", questions);
        const questionText = question.question;
        const incorrectAnswers = question.incorrect_answers.map(
            (answer, index) => ({
                value: answer,
                isHeld: false,
                isCorrect: false,
                styles: { background: "white" },
                id: index,
                questionId: quesIndex,
            })
        );
        //console.log("incorrect in sort", incorrectAnswers);
        const correctAnswer = {
            value: `${question.correct_answer}  ..`,
            isHeld: false,
            styles: { background: "green" },
            isCorrect: true,
            questionId: quesIndex,
            id: incorrectAnswers.length,
        };
        //console.log("correct in sort", correctAnswer);
        const allAnswersArray = [...incorrectAnswers, correctAnswer].sort(
            () => Math.random() - 0.5
        );
        //if (allAnswersArray) delete question.incorrect_answers;
        return {
            allAnswers: allAnswersArray,
            questionText: questionText,
            id: quesIndex,
           
        };
    });
};
