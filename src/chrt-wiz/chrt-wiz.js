import React from 'react';
import Ball from './ball';
import styles from './styles.scss';

const ChrtWiz = ({ data, triggerValueTextOnClick }) => (
  <div className="cwiz-wrapper" >
    <ul >
      {data.map((itm, i) => (
        <li key={i} >
          <Ball itm={itm} triggerValueTextOnClick={triggerValueTextOnClick} />
        </li >
      ))}
    </ul >
  </div >
);

export default ChrtWiz;
