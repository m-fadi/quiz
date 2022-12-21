import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/quizSlice";
import questionsReducer from "../redux/questionsSlice";

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        questions: questionsReducer,
    },
});
// const rootReducer = (state, action) => {
//     if (action.type === "counter/logout") {
//         state = undefined;
//     }
//     return combinedReducer(state, action);
// };
export default store;


