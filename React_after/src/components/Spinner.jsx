/* eslint-disable react/prop-types */

export const Spinner = ({ text = "", size = "5em" }) => {
    const header = text ? <h4>{text}</h4> : null;
    return (
      <div className="spinner">
        {header}
        <img src="https://img.icons8.com/?size=1x&id=RdwpURQDRqej&format=gif"/>
        <div className="loader" style={{ height: size, width: size }} />
      </div>
    );
  };