import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h1 className={styles.section__title}>{title}</h1>
    {children}
  </>
);

Section.defaultProps = {
  children: [],
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
