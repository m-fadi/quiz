import { Box, FormControl, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleNumberQuestions } from "../redux/quizSlice";
//--------------------------------------------------------------------------//
const NumOfQuestions = () => {
    //const category = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const handleChange = (e) => {
       
        dispatch(handleNumberQuestions(e.target.value));
    };
    return (
        <Box mt={3} width="50%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Number of Questions"
                    type="number"
                    inputProps={{ min: 1 }}
                    size="small"
                />
            </FormControl>
        </Box>
    );
};

export default NumOfQuestions;
