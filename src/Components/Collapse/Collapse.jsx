import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Collapse.module.css';
import CollapseText from './CollapseContent/CollapseText/CollapseText';
import CollapseArrow from '../Arrow/Arrow';
import CollapseTitle from './CollapseContent/CollapseTitle/CollapseTitle';


const Collapse = ({ title, children }) => {

// const contentRef = useRef(null);
const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     if (isOpen) {
    //         contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    //     } else {
    //         contentRef.current.style.height = '0px';
    //     }
    // }, [isOpen]);


    return (
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

        </>
    );
};

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};


export default Collapse;