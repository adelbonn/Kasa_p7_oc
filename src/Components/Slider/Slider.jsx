import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';
// import Arrow from '../Arrow/Arrow'; //Ajouter le style pour des flèche gauche et droite, et écrire le code de la même façon que pour ArrowUp et ArrowDown mais cette fois pour arrowRight et arrowLeft
const Slider = ({ pictures, autoPlay = true, autoPlayTime = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    useEffect(() => {
        if (autoPlay) {
            slideInterval.current = setInterval(nextSlide, autoPlayTime);
        }
        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
        };
    }, [autoPlay, autoPlayTime]);

    return (
        <div className={styles.slider}>
            {pictures.length > 1 && (
                <>
                    <button onClick={prevSlide} className={styles.prev}>❮</button>
                    <button onClick={nextSlide} className={styles.next}>❯</button>
                </>
            )}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
            {pictures.length > 1 && (
                <div className={styles.counter}>
                    {currentIndex + 1} / {pictures.length}
                </div>
            )}
        </div>
    );
};

Slider.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
};

export default Slider;