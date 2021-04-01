import PropTypes from 'prop-types';
import styles from './FeedbackButton.module.css';

const FeedbackButton = ({ feedbackName, onLeaveFeedback }) => (
  <li className={styles.feedback__item}>
    <button
      className={styles.feedback__button}
      type="button"
      onClick={onLeaveFeedback}
    >
      {feedbackName}
    </button>
  </li>
);

FeedbackButton.propTypes = {
  feedbackName: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButton;
