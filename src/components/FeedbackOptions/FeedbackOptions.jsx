import PropTypes from 'prop-types';
import FeedbackButton from '../FeedbackButton';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.options__list}>
    {options.map(option => {
      return (
        <FeedbackButton
          feedbackName={option}
          onLeaveFeedback={onLeaveFeedback}
          key={option}
        />
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(String).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
