import React, { useState } from 'react';
import './App.css';

function App() {
  const [site, setSite] = useState();
  const [image, setImage] = useState();

  function getSite() {
    let imgSrc = `https://qrtag.net/api/qr_6.svg?url=${site}`
    setImage(imgSrc)
  }

  return (
    <div className="container">
      <h2>Generate a custom QR code for any website</h2>
      <div className="center">
        <img src={image} alt=''></img>
      </div>
      <a href={site} target="_blank">
        {site}
      </a>
      <div className="formDiv">
        <input
          id='qrSubmit'
          type='text'
          onChange={
            e => e.target.value.split("//").length < 2 ?
              e.target.value ? 
                setSite("https://" + e.target.value) : 
                setSite(e.target.value) :
            setSite(e.target.value)
        }
          className="form-control form-control-md mt-1"
          placeholder='Website'
        />
      </div>
      <div className="buttonDiv">
        <button className="btn btn-primary" onClick={getSite}>Create QR code</button>
      </div>
    </div>
  );
}

export default App;
