import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';
import Arrow from '../Arrow/Arrow'; 


const Slider = ({ pictures, autoPlay = false, autoPlayTime = 3000 }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const[isPlaying, setIsPlaying] = useState(false);
    const slideInterval = useRef(null);
//corriger le petit saut entre les images, quand j'utilise autoplay et que je clique sur ArrowLeft
    const nextSlide = useCallback(() => {
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        setIsPlaying(true);
    }, [ pictures.length]);

    const prevSlide = useCallback(() => {
       
        setCurrentIndex((prevIndex) => (prevIndex === 0) ? pictures.length - 1 : prevIndex - 1);
        setIsPlaying(true);
    }, [ pictures.length]);

    useEffect(() => {
        // console.log('Effect triggered');
        if (autoPlay && isPlaying) {
            slideInterval.current = setInterval(nextSlide, autoPlayTime);
        }
        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
        };
    }, [autoPlay, autoPlayTime, isPlaying, nextSlide]);


    return (
        <div className={styles.slider}>
            {pictures.length > 1 && (
                <>
                    <Arrow direction="left" handleClick={prevSlide} isOpen={isPlaying} />
                    <Arrow direction="right" handleClick={nextSlide} isOpen={isPlaying} />
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