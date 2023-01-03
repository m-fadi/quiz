import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import InputField from "../Components/InputField";
import NumOfQuestions from "../Components/NumOfQuestions";
import useFetch from "../utils/useFetch";
import { difficulties, types } from "../utils/typesAndDifficulty";
import fetchData from "../utils/fetchData";
import { setQuestions } from "../redux/questionsSlice";
import { sortQuestions } from "../utils/sortQuestions";
import { useNavigate } from "react-router-dom";
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//

const QuizConfig = () => {
    const { category, difficulty, type, numberQuestions, score } = useSelector(
        (state) => state.quiz
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, data } = useFetch({
        url: "https://opentdb.com/api_category.php",
    });
    if (loading) {
        return data.errorMsg ? (
            <h4 style={{ color: "red" }}> {data.errorMsg}</h4>
        ) : (
            <div className="dataLoading" style={{ color: "red" }}>
                Loading...
            </div>
        );
    }

    const quizUrl =
        "https://opentdb.com/api.php?" +
        `amount=${numberQuestions}` +
        (category && `&category=${category.id}`) +
        (difficulty && `&difficulty=${difficulty}`) +
        (type && `&type=${type}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData({ url: quizUrl }).then((result) => {
            const questionsList = sortQuestions(result.results);
           
            dispatch(setQuestions(questionsList));
            navigate("/quiz");
        });
    };

    return (
        <>
            {data.errorMsg && (
                <h4 style={{ color: "red" }}> {data.errorMsg}</h4>
            )}
            {!data.errorMsg && (
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <InputField label="Category" categories={data} />
                    <InputField label="Level" difficulties={difficulties} />
                    <InputField label="Type" types={types} />
                    <NumOfQuestions width="100%" />
                    <Box mt={3} width="25%">
                        <Button fullWidth variant="contained" type="submit">
                            Start Quiz
                        </Button>
                    </Box>
                </form>
            )}
        </>
    );
};

export default QuizConfig;
