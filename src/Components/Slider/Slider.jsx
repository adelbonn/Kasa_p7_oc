import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';
import Arrow from '../Arrow/Arrow'; 


const Slider = ({ pictures, autoPlay = true, autoPlayTime = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const[isPlaying, setIsPlaying] = useState(false);
    const slideInterval = useRef(null);

    const nextSlide = () => {
        console.log('Next Slide Arrow right clicked', currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        setIsPlaying(true);
    };

    const prevSlide = () => {
        console.log('Prev Slide, flèche gauche cliquée', currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
        setIsPlaying(true);
    };

    useEffect(() => {
        console.log('Effect triggered');
        if (autoPlay && isPlaying) {
            slideInterval.current = setInterval(nextSlide, autoPlayTime);
        }
        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
        };
    }, [autoPlay, autoPlayTime, isPlaying]);


    return (
        <div className={styles.slider}>
            {pictures.length > 1 && (
                <>
                    {/* <button onClick={prevSlide} className={styles.prev}>❮</button>
                    <button onClick={nextSlide} className={styles.next}>❯</button> */}
                    <Arrow direction="left" onClick={prevSlide} />
                  
                    <Arrow direction="right" onClick={nextSlide} />
                    {/* console.log('nextSlide', nextSlide) */}
                </>
                
            )}
            <div className={styles.imageContainer}>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
            </div>
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