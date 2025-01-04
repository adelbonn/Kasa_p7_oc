import PropTypes from "prop-types";
import styles from './CollapseContent.module.css';

const CollapseContent = ({ content }) => {
    return (
        <div className={styles.CollapseContent}>
           <div>{content}</div>
         </div>
   );
};

CollapseContent.propTypes = {
    content: PropTypes.node.isRequired,
};

export default CollapseContent;