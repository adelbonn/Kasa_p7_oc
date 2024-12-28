import PropTypes from 'prop-types';
import styles from './CollapseTitle.module.css';

const CollapseTitle = ({ title }) => {
    return (
    <h3 className={styles.collapseTitle}>{title}</h3>
)};
CollapseTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
export default CollapseTitle;