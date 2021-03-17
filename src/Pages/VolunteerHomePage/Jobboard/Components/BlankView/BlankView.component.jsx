import React from 'react';
import "./BlankView.styles.scss";

const BlankView = ({iconClassName,text}) => {
  return (
    <div className="nothingToShow">
      <i class={`${iconClassName}`}></i>
      <h3>{text}</h3>
    </div>
  );
};

export default BlankView;
