import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 mt5">
        Will Artificial Intelligence rule the world...? <br /> Start by pasting
        a link to an image to see if it can recognize faces...😉{' '}
      </p>
      <div className="center form pa4 br3 shadow-5">
        <input type="text" className="f4 pa2 w-70 center" />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
