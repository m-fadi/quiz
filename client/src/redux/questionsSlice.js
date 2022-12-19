import { createSlice,current } from "@reduxjs/toolkit";

const initialState = [];

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuestions: (state, action) => {
            console.log("state in quesSlice", state.questions);
            console.log("payload in questionsSlice", action.payload);

            state.push(...action.payload)
        },
        updateIsHeld: (state, action) => {
            console.log("payload in updateIsHeld", action.payload);
           
            const question = current(state).filter((ques) => {
                return ques.id === action.payload.quesId;
            });
            console.log("the clicked question", question);
            // state.map((ques) => {
            //     if (ques.id === action.payload.quesId) {
            //         console.log("the clicked question", ques);
            //         ques.allAnswers.map((option) => {
            //             if (option.id === action.payload.optionId) {
            //                 console.log("the clicked qoption", option);
            //                 return {
            //                     ...option,
            //                     isHeld: true,
            //                     styles: { background: "lightblue" },
            //                 };
            //             } else return option;
            //         });
            //     }
            //     return state.questions;
            // });
        },
    },
});
export const { getQuestions,updateIsHeld } = questionsSlice.actions;

export default questionsSlice.reducer;
