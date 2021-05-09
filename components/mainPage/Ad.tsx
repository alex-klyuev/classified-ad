import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

interface AdState {
  title: string;
  date: Date | string;
  body: string;
  image: string | ArrayBuffer;
  gender: string;
  age: string;
  target: {
    consumer: boolean;
    smb: boolean;
    enterprise: boolean;
  }
}

interface Props {
  adState: AdState;
}

const Ad = (props: Props) => {
  const {
    title,
    body,
    image
  } = props.adState;
  let { date } = props.adState;
  if (date) {
    date = moment(date).format('l');
  }

  return (
    <div>
      <h1 className="welcomePageTitleContainer">See your Ad below:</h1>
      <h1 className="welcomePageTitleContainer">{title}</h1>
      <h6 className="date">{date}</h6>
      <div className="adBody">{body}</div>
    </div>
  );
}

export default Ad;
