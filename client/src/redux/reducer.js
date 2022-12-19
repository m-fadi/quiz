import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizCategory: "",
    quizDifficulty: "",
    quizType: "",
    numberOfQuestions: 10,
    score: 0,
};
const reducer = (state = initialState, action) => {
    return state;
};
export default reducer;
