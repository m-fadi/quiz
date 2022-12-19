import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuestions: (state, action) => {
            console.log("state in quesSlice", state)
            console.log("payload in questionsSlice", action.payload);

            return [...action.payload];
        },
        updateIsHeld: (state, action) => {
            console.log("payload in updateIsHeld", action.payload);

            state.questions.map((ques) => {
                if (ques.id === action.payload.quesId) {
                    console.log("the clicked question", ques);
                    ques.allAnswers.map((option) => {
                        if (option.id === action.payload.optionId) {
                            console.log("the clicked qoption", option);
                            return {
                                ...option,
                                isHeld: true,
                                styles: { background: "lightblue" },
                            };
                        } else return option;
                    });
                }
                return state;
            });
        },
    },
});
export const { getQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
