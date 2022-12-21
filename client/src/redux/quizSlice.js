import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: { id: 20, name: "Mythology" },
    difficulty: "easy",
    type: "boolean",
    numberQuestions: 3,
    score: 0,
};
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        handleCategory: (state, action) => {
            return { ...state, category: action.payload };
        },
        handledifficulty: (state, action) => {
            return { ...state, difficulty: action.payload.level };
        },
        handleType: (state, action) => {
            return { ...state, type: action.payload.type };
        },
        handleNumberQuestions: (state, action) => {
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
