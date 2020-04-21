import React, { useEffect, useState, Fragment } from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
// import StatusBalls from '@delta-band/react-status-balls';
import StatusBalls from '../status-balls/src';

export default {
  title: 'Status Balls',
  component: StatusBalls,
  decorators: [withKnobs]
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
  for (let i = 0; i < 15; i++) {
    const v = init ? 0 : Math.floor(Math.min(Math.abs(Math.random() + 0.3), 0.99) * 100);
    data.push({
      v,
      t: (
        <div >
          <div >{v}%</div >
          <div >{getValueText(v)}</div >
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
    const data = await promise();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(async () => {
      await fetchData();
      setLoading(false);
      setInterval(fetchData, 5000);
    }, 0)
  }, []);

  return (
    <Fragment>
      <div className="install-note">yarn add @delta-band/react-status-balls</div>
      <StatusBalls loading={loading} className="my-chart" data={data} ballClickCallBack={action('ball-click')} />
    </Fragment>
  );
};
