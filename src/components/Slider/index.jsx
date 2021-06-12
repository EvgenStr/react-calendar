import React, { useState } from 'react';
import { useData } from '../../hooks';
import style from './Slider.module.sass';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const load = () => {
    return fetch('/images.json').then(res => res.json());
  };
  const { data, error, isFetching } = useData(load);


  return (
    <div className={style.container}>

    </div>
  )
}
export default Slider;