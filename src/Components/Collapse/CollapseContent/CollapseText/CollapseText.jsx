import PropTypes from "prop-types";
import styles from './CollapseText.module.css';

const CollapseText = ({ children }) => {
    return <p className={styles.collapseText}>{children}</p>;
};

CollapseText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CollapseText;