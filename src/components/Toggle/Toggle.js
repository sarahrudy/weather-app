import './Toggle.css'
import { useState } from 'react'
import Switch from 'react-switch'

const Toggle = ({isF, handleToggle}) => {
  return (
    <>
      <input
        checked={isF}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle