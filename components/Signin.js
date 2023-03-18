/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      id="signin"
    >
      <div>
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/9f/26/8d/9f268dd4-327b-b179-215d-3068eb35d5de/source/512x512bb.jpg" width="75%" height="75%" alt="townsquare" />
        <h1>Welcome to the Town Square!</h1>
      </div>
      <p>Click the button below to login!</p>
      <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
