import React, { useState, useEffect } from 'react';
import { useData } from '../../hooks';
import Slide from './Slide';
import style from './Slider.module.sass';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let imagesLength = null;
  let prevIndex = null;
  let nextIndex = null;

  const load = () => {
    return fetch('/images.json').then(res => res.json());
  };
  const { data, error, isFetching } = useData(load);
  const setIndexes = () => {
    nextIndex = ((currentIndex + 1) % imagesLength)
    prevIndex = ((currentIndex - 1 + imagesLength) % imagesLength);
  }
  if (!error && data) {
    imagesLength = data.length;
    setIndexes();
  }

  const nextSlide = () => { setCurrentIndex((currentIndex + 1) % imagesLength) }
  const prevSlide = () => { setCurrentIndex((currentIndex - 1 + imagesLength) % imagesLength) }

  useEffect(() => {
    setIndexes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])
  if (data && !isFetching) {
    return (
      <div className={style.container}>
        <Slide src={data[currentIndex]} prevSrc={data[prevIndex]} nextSrc={data[nextIndex]}
          prevSlideHandler={prevSlide} nextSlideHandler={nextSlide} />
      </div>
    )
  }
  return (<div>{error}</div>)
}
export default Slider;