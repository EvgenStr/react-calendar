import React, { useState } from 'react';
import { useData } from '../../hooks';
import Slide from './Slide';
import SliderControls from './SliderControls';
import style from './Slider.module.sass';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const load = async () => {
    return fetch('/images.json').then(res => res.json());
  };
  const { data, error, isFetching } = useData(load);

  const nextSlide = () => { setCurrentIndex((currentIndex + 1) % data.length) }
  const prevSlide = () => { setCurrentIndex((currentIndex - 1 + data.length) % data.length) }

  if (data && !isFetching) {
    return (
      <div className={style.container}>
        <Slide src={data[currentIndex]} />
        <SliderControls prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    )
  }
  return (<div>{error}</div>)
}
export default Slider;