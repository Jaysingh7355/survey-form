import { useState } from 'react';
import { Button, Container, Typography, Slider, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define the survey questions
const questions = [
  { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, question: "What could we do to improve our service?", type: "text" }
];

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer change based on question type
  const handleAnswerChange = (value) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit the survey answers
  const handleSubmit = () => {
    localStorage.setItem('survey_answers', JSON.stringify(answers));
    navigate('/thankyou');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
         {currentQuestionIndex + 1} / {questions.length}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {currentQuestion.question}
      </Typography>

      {/* Render Slider for rating type questions */}
      {currentQuestion.type === 'rating' ? (
        <Box sx={{ mt: 4, mb: 4 }}>
          <Slider
            value={answers[currentQuestion.id] || 0}
            onChange={(e, value) => handleAnswerChange(value)}
            min={1}
            max={currentQuestion.scale}
            marks
            step={1}
            valueLabelDisplay="auto"
          />
        </Box>
      ) : (
        /* Render TextField for text type question */
        <TextField
          fullWidth
          multiline
          rows={4}
          value={answers[currentQuestion.id] || ''}
          onChange={(e) => handleAnswerChange(e.target.value)}
          label="Your Answer"
          variant="outlined"
          sx={{ mt: 4, mb: 4 }}
        />
      )}

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="outlined"
        >
          Previous
        </Button>
        {currentQuestionIndex < questions.length - 1 ? (
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Survey;
