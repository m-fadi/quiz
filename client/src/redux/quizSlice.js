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
            //console.log("action.payload in QiusSlice", action.payload);
            let score =0;
             action.payload.questions.map((question) => {
                //console.log("question in QiusSlice", question);
                question.allAnswers.map((option) => {
                    if (option.isHeld && option.isCorrect) {
                        console.log("option in QiusSlice", option);
                        score += 1;
                    }
                });
            });
            console.log("scoooore", score);
            state.score=score
        },
        // decrementScore: (state, action) => {
        //     state.score -= 1;
        // },
    },
});
export const {
    handleCategory,
    handledifficulty,
    handleType,
    handleNumberQuestions,
    decrementScore,
    handleScore,
} = quizSlice.actions;

export default quizSlice.reducer;
