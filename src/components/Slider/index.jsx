import React, { useState, useCallback } from 'react';
import { useData } from '../../hooks';
import Slide from './Slide';
import SliderControls from './SliderControls';
import style from './Slider.module.sass';

function Slider() {
  console.log("render")
  const [currentIndex, setCurrentindex] = useState(0);

  const load = () => {
    return fetch('/images.json').then(res => res.json());
  };
  const { data, error, isFetching } = useData(load);

  const nextSlide = () => { setCurrentindex((currentIndex + 1) % data.length) }
  const prevSlide = () => { setCurrentindex((currentIndex - 1 + data.length) % data.length) }
  if (data) console.log(data[currentIndex], 'current slide')

  if (data && !isFetching) {
    return (
      <div className={style.container}>
        <Slide src={data[currentIndex]} />
        <SliderControls prev={prevSlide} next={nextSlide} />
      </div>
    )
  }
  return (<div>{error}</div>)
}
export default Slider;