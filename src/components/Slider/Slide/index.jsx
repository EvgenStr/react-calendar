import React, { useState, useEffect } from 'react';
import SliderControls from '../SliderControls';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './Slide.module.sass';

function Slide({ prevSlideHandler, nextSlideHandler, src, prevSrc, nextSrc }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 1000)
  }, [])
  const errorHandler = ({ target }) => {
    target.remove();
    setIsError(true)
  };

  const handlerSetter = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true)
    }, 200)
  }

  const nextHandler = () => {
    handlerSetter()
    nextSlideHandler()
  }

  const prevHandler = () => {
    handlerSetter()
    prevSlideHandler()
  }

  return (
    <div className={style.wrapper}>
      <img className={cx(style.currentSlide, { [style.active]: isLoading })}
        onError={errorHandler} src={src} alt="space"
      />
      <img className={style.otherSlide}
        onError={errorHandler} src={prevSrc} alt="space"
      />
      <img className={style.otherSlide}
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
