import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    questions: [],

    score: null,
};

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            console.log("action.payload Set'Questions", action.payload);
            return { ...state, questions: [...action.payload] };
        },
        updateIsHeld: (state, action) => {
            const allQues = [...current(state).questions];
            const updatedQuestions = allQues.map((question) => {
                if (question.id == action.payload.questionId) {
                    return {
                        ...question,
                        allAnswers: action.payload.updatedQuestion,
                    };
                } else return question;
            });
            console.log(updatedQuestions);
            return {
                ...state,
                questions: updatedQuestions,
            };
        },
        updateScore: (state, action) => {
            return { ...state, score: action.payload };
        },
    },
});
export const { updateIsHeld, updateScore, setQuestions } =
    questionsSlice.actions;

export default questionsSlice.reducer;
