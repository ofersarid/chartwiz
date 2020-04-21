import React, { useState } from 'react';
import cx from 'classnames';

const Ball = ({ itm, loading, clickCallBack }) => {
  const [showValueText, setShowValueText] = useState(false);

  const toggleShowValue = () => {
    setShowValueText(!showValueText);
    clickCallBack(itm);
  };

  return (
    <div
      className="ball"
      style={{
        left: `${itm.v}%`,
        background: loading ? '#EBEBEB' : itm.c,
        pointerEvents: loading ? 'none' : 'all',
      }}
      onClick={toggleShowValue}
    >
      <div className={cx('tip', {
        show: showValueText,
        right: itm.v < 50,
        left: itm.v >= 50,
      })}>{itm.t}</div >
    </div>
  );
};

export default Ball;
