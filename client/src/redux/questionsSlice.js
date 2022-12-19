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
            console.log("payload in updateIsHeld", action.payload);
            console.log("state in update: ", current(state));

            const results = JSON.stringify(current(state));
            const resultsParsed = JSON.parse(results);

            const test = resultsParsed.map((question, index) => {
                if (question.id === action.payload.quesId) {
                    question.allAnswers[action.payload.optionId].isHeld =
                        !question.allAnswers[action.payload.optionId].isHeld;
                    console.log(question.allAnswers);
                }

                return question;
            });

            console.log("TEST: ", test);
            return [...test];
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
