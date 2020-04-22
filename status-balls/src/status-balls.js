import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Ball from './ball';
import styles from './styles.scss';

const StatusBalls = ({ data, className, loading, ballClickCallBack }) => (
  <div className={cx('status-balls-wrapper', [className])} >
    <ul className="lines">
      {data.map((itm, i) => (
        <li key={i} />
      ))}
    </ul>
    <ul >
      {data.map((itm, i) => (
        <li key={i} >
          <label>{itm.l}</label>
          <Ball itm={itm} loading={loading} clickCallBack={ballClickCallBack} />
        </li >
      ))}
    </ul >
  </div >
);

StatusBalls.propTypes = {
  /** So you can hack the styles */
  className: PropTypes.string,

  /** if true the balls will be grayed out and disabled */
  loading: PropTypes.bool,

  /** v - ball value between 0 and 100 <br />
  *   c - ball color <br />
  *   l - ball label <br />
  *   t - ball pop-over content
  *   */
  data: PropTypes.arrayOf(PropTypes.shape({
    v: PropTypes.number.isRequired,
    c: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
    t: PropTypes.any,
  })),

  /** Callback function for when clicking on a ball */
  ballClickCallBack: PropTypes.func,
};

StatusBalls.defaultProps = {
  loading: false,
};

export default StatusBalls;
