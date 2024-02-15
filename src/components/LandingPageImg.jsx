// import React, { useState, useLayoutEffect } from 'react';
// import { Controlled as Zoom } from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';
import img1 from '../assets/images/pricing (2).png';
import '../cssFile/landingPage.css';

// import { Zoom } from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const MyImg = () => (
  <Zoom
    ZoomContent={({ img, buttonUnzoom }) => (
      <div>
        {img}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '5px',
            borderRadius: '5px',
          }}
        >
          <p>This is the text on the image</p>
        </div>
        {buttonUnzoom}
      </div>
    )}
  >
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={img1}
      width="200"
    />
  </Zoom>
);


export default MyImg;

