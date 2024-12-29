// import {useState}   from 'react';
// import PropTypes from 'prop-types';
// import styles from './Slider.module.css';
// import SliderContent from './SliderContent/SliderContent';
// import SliderArrow from './SliderArrow/SliderArrow';
// import Slidercounter from './SliderDots/SliderCounter';
// import {sliderData} from '../../data/sliderData';















// const Slider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const length = sliderData.length;

//     const nextSlide = () => {
//         setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
//     };

//     const prevSlide = () => {
//         setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
//     };

//     return (
//         <div className={styles.slider}>
//             <SliderArrow direction="left" handleClick={prevSlide} />
//             <SliderContent currentSlide={currentSlide} />
//             <SliderArrow direction="right" handleClick={nextSlide} />
//             <Slidercounter currentSlide={currentSlide} length={length} />
//         </div>
//     );
// }
