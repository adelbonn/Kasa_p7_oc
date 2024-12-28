import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Collapse.module.css';
import CollapseText from './CollapseContent/CollapseText/CollapseText';
import CollapseArrow from './CollapseContent/CollapseArrow/CollapseArrow';
import CollapseTitle from './CollapseContent/CollapseTitle/CollapseTitle';


const Collapse = ({ title, children }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <div className={styles.collapse}>
        <>
            <button
                className={styles.collapseButton}
                onClick={handleCollapse}
                aria-expanded={isOpen}
                aria-controls="collapseContent"
            >
                <CollapseTitle title={title} />
                <CollapseArrow isOpen={isOpen} />
            </button>
            {isOpen &&  (
                <div id="collapseContent" className={styles.collapseContent}>
                    <CollapseText>{children}</CollapseText>
                </div>
            )}
        {/* // </div> */}
        </>
    );
};

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};


export default Collapse;