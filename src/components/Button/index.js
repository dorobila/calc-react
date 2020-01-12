/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Button.css';

const Button = ({ content, type, onButtonClick }) => {
  return (
    <div
      className={`Button ${content === '0' ? 'zero' : ''} ${type || ''}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
