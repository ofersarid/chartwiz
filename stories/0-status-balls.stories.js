import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
// import StatusBalls from '@delta-band/react-status-balls';
import StatusBalls from '../status-balls';

export default {
  title: 'Status Balls',
  component: StatusBalls
};

const getValueText = v => {
  switch (true) {
    case v < 80:
      return 'notice';
    case v < 90:
      return 'healthy';
    default:
      return 'optimal';
  }
};

const getValueColor = v => {
  switch (true) {
    case v < 80:
      return '#d51b48';
    case v < 90:
      return '#ffc551';
    default:
      return '#72d572';
  }
};

const generateData = (init) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const v = init ? 0 : Math.floor(Math.min(Math.abs(Math.random() + 0.3), 0.99) * 100);
    data.push({
      v,
      t: (
        <div >
          <div >{v}%</div >
          <div >{getValueText(v)}</div >
          <h1>Hello</h1>
        </div >
      ),
      c: getValueColor(v),
      l: `Service ${i + 1}`
    })
  }
  return data;
};

const promise = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(generateData());
  }, 1000);
});

export const PlayGround = () => {
  const [data, setData] = useState(generateData(true));
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const data = await promise();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setInterval(fetchData, 5000);
    }, 0)
  }, []);

  return (
    <StatusBalls data={data} className="my-chart" />
  );
};
