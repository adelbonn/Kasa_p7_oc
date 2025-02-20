import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Collapse.module.css";
import CollapseContent from "./CollapseContent/CollapseContent/CollapseContent";
import CollapseArrow from "../Arrow/Arrow";
import CollapseTitle from "./CollapseContent/CollapseTitle/CollapseTitle";
// import CollapseList from './CollapseList/CollapseList';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contentRef = useRef(null);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div className={styles.collapse}>
      <button
        className={styles.collapseButton}
        onClick={handleCollapse}
        aria-expanded={isOpen}
        aria-controls="collapseContent"
      >
        <CollapseTitle title={title} />
        <CollapseArrow isOpen={isOpen} />
      </button>
      <div
        id="collapseContent"
        ref={contentRef}
        className={`${styles.collapseContent} ${
          isOpen ? styles.open : ""
        }`}
      >
        <CollapseContent content={content} />
      </div>
    </div>
  );
};

Collapse.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapse;
