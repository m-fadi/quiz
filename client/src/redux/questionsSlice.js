import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuestions: (state, action) => {
            state.push(...action.payload);
        },
        updateIsHeld: (state, action) => {
            const clickedQues =
                state &&
                state.filter((ques,index) => {
                    return ques.id === action.payload.quesId;
                });

            const question = clickedQues[0].allAnswers.map((opt) => {
                if (opt.id == action.payload.optionId) {
                    return { ...opt, isHeld: true };
                } else {
                    return { ...opt, isHeld: false };
                    //return opt;
                }
            });
            console.log("state at clicked", state.findIndex(question=> question.id==clickedQues.id));
            return [...state];
        },
    },
});
export const { getQuestions, updateIsHeld } = questionsSlice.actions;

export default questionsSlice.reducer;

// console.log("options", option);
// console.log("optionId from payload", action.payload.optionId);
// console.log("the clicked question", ques);

// updateIsHeld: (state, action) => {
//     // console.log("payload in updateIsHeld", action.payload);

//     // const question = current(state).filter((ques) => {
//     //     return ques.id === action.payload.quesId;
//     // });
//     // console.log("the clicked question", question[0]);
//     // console.log(
//     //     "isHeld",
//     //     (question[0].allAnswers[action.payload.optionId].isHeld)
//     // );
//     // question[0].allAnswers[action.payload.optionId].isHeld = true;

//     //console.log("the clicked question", question[0]);

//     current(state).map((ques) => {
//         if (ques.id === action.payload.quesId) {

//             const opt=ques.allAnswers.map((option) => {

//                 if (option.id == action.payload.optionId) {
//                     console.log("the clicked qoption", option);
//                     return {
//                         ...option,
//                         isHeld: true,
//                         styles: { background: "lightblue" },
//                     };
//                 } else {
//                     console.log("wrong option", option.id);
//                     return option;
//                 }
//             });
//         }

//         return [...ques, ];
//     });
//     console.log(current(state));
//     return [...state]
// },
