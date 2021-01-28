import React from 'react';
import style from './Loader.module.scss';

function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}>
        <div className={style.first} />

        <div className={style.second} />

        <div className={style.third} />
      </div>
    </div>
  );
}

export default Loader;
