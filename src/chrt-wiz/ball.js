import React, { useState, useEffect } from 'react';
import cx from 'classnames';

const Ball = ({ itm, triggerValueTextOnClick }) => {
  const [showValueText, setShowValueText] = useState(!triggerValueTextOnClick);

  const toggleShowValue = () => {
    setShowValueText(!showValueText);
  };

  return (
    <div
      className="ball"
      style={{
        left: `${itm.v}%`,
        background: itm.c
      }}
      onClick={triggerValueTextOnClick ? toggleShowValue :  () => {}}
    >
      <label className={cx({
        show: showValueText
      })} >{itm.v}%</label >
    </div >
  );
};

export default Ball;
