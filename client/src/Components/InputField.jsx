import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/material";
import {
    handleCategory,
    handledifficulty,
    handleType,
} from "../redux/quizSlice";

//--------------------------------------------------------------------------//
const InputControl = (props) => {
    const dispatch = useDispatch();
    const { label, categories, difficulties, types } = props;
    const [value, setValue] = useState("");
    // const [queryData, setQueryData] = useState({});

    const categoriesList =
        categories &&
        categories.map((category) => (
            <MenuItem key={category.id} value={category}>
                {category.name}
            </MenuItem>
        ));
    const levelsList =
        difficulties &&
        difficulties.map((difficulty) => (
            <MenuItem key={difficulty.id} value={difficulty}>
                {difficulty.level}
            </MenuItem>
        ));
    const typesList =
        types &&
        types.map((type) => (
            <MenuItem key={type.id} value={type}>
                {type.type}
            </MenuItem>
        ));

    const handleChange = (e) => {
        setValue(e.target.value);

        if (label === "Category") {
            
            dispatch(handleCategory(e.target.value));
        } else if (label === "Type") {
            console.log("InputField", e.target.value);
            dispatch(handleType(e.target.value));
        } else if (label === "Level") {
            dispatch(handledifficulty(e.target.value));
        }
    };

    return (
        <Box mt={3} width="50%">
            <FormControl fullWidth>
                <InputLabel>
                    {<span style={{ fontSize: "0.75rem" }}>{label}</span>}
                </InputLabel>
                <Select
                    name={label}
                    size="small"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {categoriesList}
                    {levelsList}
                    {typesList}
                </Select>
            </FormControl>
        </Box>
    );
};

export default InputControl;
