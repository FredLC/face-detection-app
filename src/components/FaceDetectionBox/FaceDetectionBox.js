import React from 'react';
import './FaceDetectionBox.css';

const FaceDetectionBox = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt4">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceDetectionBox;
