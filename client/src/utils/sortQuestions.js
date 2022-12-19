import { nanoid } from "nanoid";
export const sortQuestions = (questions) => {
    return questions.map((question) => {
        //console.log("question", questions);
        const questionText = question.question;
        const incorrectAnswers = question.incorrect_answers.map((answer,index) => ({
            value: answer,
            isHeld: false,
            isCorrect: false,
            styles: { background: "white" },
            id:index,
        }));
        //console.log("incorrect in sort", incorrectAnswers);
        const correctAnswer = {
            value: question.correct_answer,
            isHeld: false,
            isCorrect: true,
        };
        //console.log("correct in sort", correctAnswer);
        const allAnswersArray = [...incorrectAnswers, correctAnswer].sort(
            () => Math.random() - 0.5
        );
        //if (allAnswersArray) delete question.incorrect_answers;
        return {
            allAnswers: allAnswersArray,
            question: questionText,
            id: nanoid(),
        };
    });
};
