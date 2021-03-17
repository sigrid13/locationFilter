import React from 'react';
import {Container, Text} from "./BlankView.module.scss";

const BlankView = ({text}) => {
  return (
    <div className={Container}>
      <img src="https://img.icons8.com/clouds/200/000000/unchecked-checkbox.png"/>
      <p className={Text}>{text}</p>
    </div>
  );
}

export default BlankView;
