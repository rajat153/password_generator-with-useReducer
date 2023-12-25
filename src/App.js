import React, { useState, useRef, useReducer } from 'react';
import { reducer } from './useReducer';

import './style.css';

export default function App() {
  const initialState = {
    length: '8',
    spec_char: false,
    alphabets: false,
    val: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  const handleChange = (e) => {
    dispatch({ type: 'length', value: e.target.value });
   
  };

  const handleChangecheck = (e, name) => {
    dispatch({ type: 'spec_char', value: e.target.checked });
  };

  const handleChangecheck1 = (e) => {
    dispatch({ type: 'alphabets', value: e.target.checked });
  };

  const handleGenerate = () => {
    dispatch({ type: 'gen_password' });

    
  };

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(state.val);
  
  };


  return (
    <div className="bg-green-300 flex flex-col justify-evenly items-center p-6">
      <h1 className="m-2">Password Generator</h1>
      <div>
        <input type="text" value={state.val} className="rounded-sm" readOnly />
        <button className="bg-purple-500 px-3" onClick={copyToClipboard}>
          COPY
        </button>
      </div>
      <div className=" flex justify-between border-2 border-indigo-600 m-2 p-3 rounded-md">
        <div className="mx-2">
        <input
          type="range"
          onChange={handleChange}
          min="1"
          max="12"
          value={state.length}
          id="input"
        />
        
        <label htmlFor="input">length : {state.length}</label>

        </div>
        <div  className="mx-2">
        <input
          type="checkbox"
          id="scales"
          onChange={(e) => {
            handleChangecheck(e, 'special_char');
          }}
          name="special_char"
        />
        <label htmlFor="scales">Special Characters</label>

        </div>

        {/* <span>length : {length}</span> */}
        
        <input
          type="checkbox"
          onChange={handleChangecheck1}
          id="alphabets"
          name="alphabets"
        />
        <label htmlFor="alphabets">Use Alphabets</label>
      </div>
      <button
        className="border-2 bg-red-300 rounded-md m-3 p-2"
        onClick={handleGenerate}
      >
        Generate Password
      </button>
    </div>
  );
}
