import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    
};
export const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        handleFirstName: (state, action) => {
            console.log("SSSSlice", action.payload);
            return { ...state, firstName: action.payload };
        },
        handleLastName: (state, action) => {
            console.log("SSSSlice diff", action.payload);
            return { ...state, lastName: action.payload.level };
        },
        handleEmail: (state, action) => {
            console.log("SSSSlice type", action.payload);
            return { ...state, email: action.payload.type };
        },
        handlePassword: (state, action) => {
            console.log("SSSSlice number", action.payload);
            return { ...state, password: action.payload };
        },
       
    },
});
export const {
    handleFirstName,
    handleLastName,
    handleEmail,
    handlePassword,
} = userDataSlice.actions;

export default userDataSlice.reducer;
