import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
};
export const userDataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log("setUserData payload", action.payload);
            return { ...action.payload };
        },
    },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
        // handleLastName: (state, action) => {
        //     console.log("SSSSlice diff", action.payload);
        //     return { ...state, lastName: action.payload.level };
        // },
        // handleEmail: (state, action) => {
        //     console.log("SSSSlice type", action.payload);
        //     return { ...state, email: action.payload.type };
        // },
        // handlePassword: (state, action) => {
        //     console.log("SSSSlice number", action.payload);
        //     return { ...state, password: action.payload };
        // },

