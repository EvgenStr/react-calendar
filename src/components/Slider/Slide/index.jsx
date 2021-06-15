import React, { useState, useEffect, useRef } from 'react';
import SliderControls from '../SliderControls';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './Slide.module.sass';

function Slide({ prevSlideHandler, nextSlideHandler, src, prevSrc, nextSrc }) {
  const [isError, setIsError] = useState(false);
  const currentImg = useRef(null)
  const nextImg = useRef(null)
  const prevImg = useRef(null)
  const wrapper = useRef(null)

  const errorHandler = ({ target }) => {
    wrapper.current.style.opacity = 1
    target.remove();
    setIsError(true)
  };

  const loadHandler = () => {
    wrapper.current.style.opacity = 1
    opacitySetter()
  }

  const opacitySetter = () => {
    currentImg.current.style.opacity = 1
    nextImg.current.style.opacity = 0
    prevImg.current.style.opacity = 0
  }

  const nextHandler = () => {
    currentImg.current.style.opacity = 0
    setTimeout(() => {
      nextSlideHandler()
    }, 200)

  }

  const prevHandler = () => {
    currentImg.current.style.opacity = 0
    setTimeout(() => {
      prevSlideHandler()
    }, 200)

  }
  useEffect(() => {
    currentImg.current.style.opacity = 0
  }, [])

  return (
    <div ref={wrapper} className={style.wrapper}>
      <img ref={currentImg} className={style.currentSlide}
        onError={errorHandler} onLoad={loadHandler} src={src} alt="space"
      />
      <img ref={prevImg} className={style.otherSlide}
        onError={errorHandler} src={prevSrc} alt="space"
      />
      <img ref={nextImg} className={style.otherSlide}
        onError={errorHandler} src={nextSrc} alt="space"
      />
      <div className={cx(style.error, { [style.errorActive]: isError })}>load error</div>
      <SliderControls prevHandler={prevHandler} nextHandler={nextHandler} />
    </div>
  )
}
Slide.propTypes = {
  prevSlideHandler: PropTypes.func.isRequired,
  nextSlideHandler: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  prevSrc: PropTypes.string.isRequired,
  nextSrc: PropTypes.string.isRequired,
}
export default Slide;
