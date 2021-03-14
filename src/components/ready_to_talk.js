import React from "react";

const ReadyToTalk = () => (
  <div
    className="container-fluid scyscraperJumbotron">
    <div className="row">
      <div className="column">
        <h1 className="readyToTalkHeader">Ready to talk?</h1>
        <p className="talkFor">I would like to talk to your experts for:</p>
        <button className="selectAServiceButton">Select a service                               ▾</button>
      </div>
      <div className="column">
        <p className="capitalMarkets">
          Experienced in capital markets, a client-
        </p>
        <br />
        <br />
        <br />
        <div className='submitForm'>
        <input
          className="form-control fullNameInput"
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          className="form-control fullNameInput"
          type="text"
          placeholder="Phone Number"
        />
        <br />
        <input
          className="form-control fullNameInput"
          type="text"
          placeholder="Your Email Address"
        />
        <br />
        <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToTalk;
