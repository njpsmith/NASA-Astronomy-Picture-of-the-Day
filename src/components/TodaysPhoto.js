import React from 'react';
import Image from './Image';

const TodaysPhoto = (props) => {
  return (
    <div>
      <Image image={props.image}/>
      <p>Today's photo: {props.image && props.image.title}</p>
    </div>
  );
};

export default TodaysPhoto;