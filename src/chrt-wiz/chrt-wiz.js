import React from 'react';
import Ball from './ball';
import cx from 'classnames';
import styles from './styles.scss';

const ChrtWiz = ({ data, triggerValueTextOnClick, className }) => (
  <div className={cx('cwiz-wrapper', [className])} >
    <ul >
      {data.map((itm, i) => (
        <li key={i} >
          <label>{itm.l}</label>
          <Ball itm={itm} triggerValueTextOnClick={triggerValueTextOnClick} />
        </li >
      ))}
    </ul >
  </div >
);

export default ChrtWiz;
