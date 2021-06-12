import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import style from './Slide.module.sass';

function Slide(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const errorHandler = () => setIsError(true);
  const loadHandler = () => {
    setIsLoading(false)
    console.log('Slide')
  };
  useEffect(() => { setIsLoading(true) }, [props])
  return (
    <div className={style.wrapper}>
      <img className={cx(style.currentSlide, { [style.active]: !isLoading })}
        onError={errorHandler} onLoad={loadHandler}
        {...props} alt="space" />
      <div className={cx(style.error, { [style.errorActive]: isError })}>load error</div>
    </div>
  )
}
export default Slide;