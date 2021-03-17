import React from 'react';
import "./ConfirmationInput.styles.scss";

const ConfirmationInput = ({label, value}) => {
  return (
    <div className="Input">
      <p className="Label">{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default ConfirmationInput;
