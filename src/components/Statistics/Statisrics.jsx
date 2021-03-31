import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {!!total ? (
      <ul className={styles.statistics__list}>
        <li className={styles.statistics__item}>Good: {good}</li>
        <li className={styles.statistics__item}>Neutral: {neutral}</li>
        <li className={styles.statistics__item}>Bad: {bad}</li>
        <li className={styles.statistics__item}>Total: {total}</li>
        <li className={styles.statistics__item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
