import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/quizSlice";
import questionsReducer from "../redux/questionsSlice";

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        questions: questionsReducer,
    },
});
export default store;
