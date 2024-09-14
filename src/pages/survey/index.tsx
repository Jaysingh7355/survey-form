import { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Question, Answers } from "./type";
import { StyledBox, StyledContainer, StyledPaper } from "./styled"; // Importing the styles

const questions: Question[] = [
  { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, question: "What could we do to improve our service?", type: "text" },
];

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [openDialog, setOpenDialog] = useState<boolean>(false); // State for the confirmation dialog
  const navigate = useNavigate();

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleNumberClick = (number: number) => {
    setAnswers((prev: any) => ({ ...prev, [currentQuestion.id]: number }));
  };

  const handleAnswerChange = (value: string) => {
    setAnswers((prev: any) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOpenConfirmation = () => {
    setOpenDialog(true);
  };

  const handleCloseConfirmation = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    localStorage.setItem("survey_answers", JSON.stringify(answers));
    navigate("/thankyou");
  };

  return (
    <StyledContainer maxWidth={false} disableGutters>
      <StyledPaper>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Customer Survey
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            mt: "1rem",
            mb: "2rem",
            textAlign: "right",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          {currentQuestionIndex + 1} / {questions.length}
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            mb: "2rem",
            fontSize: { xs: "1.2rem", md: "1.75rem" },
          }}
        >
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </Typography>

        {currentQuestion.type === "rating" ? (
          <StyledBox>
            {Array.from({ length: currentQuestion.scale ?? 0 }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => handleNumberClick(index + 1)}
                variant={
                  answers[currentQuestion.id] === index + 1
                    ? "contained"
                    : "outlined"
                }
                sx={{
                  margin: 1,
                  color:
                    answers[currentQuestion.id] === index + 1
                      ? "white"
                      : "black",
                  backgroundColor:
                    answers[currentQuestion.id] === index + 1
                      ? "red"
                      : "transparent",
                  borderRadius: "4rem",
                }}
              >
                {index + 1}
              </Button>
            ))}
          </StyledBox>
        ) : (
          <TextField
            fullWidth
            multiline
            rows={4}
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
            label="Your Answer"
            variant="outlined"
            sx={{ mt: 4, mb: 4 }}
          />
        )}

        <Box display="flex" justifyContent="space-between" sx={{ mt: "2rem" }}>
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outlined"
            sx={{ bgcolor: "green", color: "white" }}
          >
            Previous
          </Button>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNext} variant="contained">
              Next
            </Button>
          ) : (
            <Button
              onClick={handleOpenConfirmation}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          )}
        </Box>
      </StyledPaper>

      <Dialog open={openDialog} onClose={handleCloseConfirmation}>
        <DialogTitle>Confirm Your Answers</DialogTitle>
        <DialogContent>
          {questions.map((question) => (
            <Box key={question.id} sx={{ mb: 2 }}>
              <Typography variant="h6">
                {question.id}. {question.question}
              </Typography>
              <Typography variant="body1">
                {answers[question.id]
                  ? answers[question.id]
                  : "No answer provided"}
              </Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
}

export default Survey;
