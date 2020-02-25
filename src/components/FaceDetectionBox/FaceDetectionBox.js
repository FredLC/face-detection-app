import React from 'react';

const FaceDetectionBox = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt4">
        <img src={imageUrl} alt="image box" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceDetectionBox;
