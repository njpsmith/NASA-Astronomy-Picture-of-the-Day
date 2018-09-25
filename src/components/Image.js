import React from 'react';
import styled from 'styled-components';


const ImageWrapper = styled.div`
  img {
    max-width: 600px;
  }
  p {
    margin-top: 6px;
  }
`

const Image = (props) => {
  return (
    <ImageWrapper>
      {props.image ? 
        <img src={props.image.url} alt={props.image.title}/>
        : null
      }
    </ImageWrapper>
  );
};

export default Image;