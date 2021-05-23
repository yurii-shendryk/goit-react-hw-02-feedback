import { useState } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;
  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    setState(prevState => {
      return {
        ...state,
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(state);
    return feedbackValues.reduce(
      (total, feedbackValue) => (total += feedbackValue),
      0,
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    const positiveFeedbackPercentage = totalFeedbacks
      ? Math.round((good / totalFeedbacks) * 100)
      : totalFeedbacks;
    return positiveFeedbackPercentage;
  };

  const feedbackNames = Object.keys(state);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackNames}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};

export default App;
