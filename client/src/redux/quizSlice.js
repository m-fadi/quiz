import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    difficulty: "",
    type: "",
    numberQuestions: 3,
    score: 0,
};
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        handleCategory: (state, action) => {
            console.log("SSSSlice", action.payload);
            return { ...state, category: action.payload };
        },
        handledifficulty: (state, action) => {
            console.log("SSSSlice diff", action.payload);
            return { ...state, difficulty: action.payload.level };
        },
        handleType: (state, action) => {
            console.log("SSSSlice type", action.payload);
            return { ...state, type: action.payload.type };
        },
        handleNumberQuestions: (state, action) => {
            console.log("SSSSlice number", action.payload);
            return { ...state, numberQuestions: action.payload };
        },
        handleScore: (state, action) => {
            return { ...state, score: action.payload };
        },
    },
});
export const {
    handleCategory,
    handledifficulty,
    handleType,
    handleNumberQuestions,
    handleScore,
} = quizSlice.actions;

export default quizSlice.reducer;
