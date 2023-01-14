import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/quizSlice";
import questionsReducer from "../redux/questionsSlice";
import userDataReducer from "../redux/userDataSlice";

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        questions: questionsReducer,
        user:userDataReducer,

    },
});
export default store;
