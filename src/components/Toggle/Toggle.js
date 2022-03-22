import './Toggle.css'

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
      <label className="react-switch-label" htmlFor={`react-switch-new`} >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle