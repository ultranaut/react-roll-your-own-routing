import React from 'react';

const Component = ({ color, children }) => {
  const style = { height: '400px' };

  if (color) {
    style.backgroundColor = color;
    style.color = 'white';
  }
  return (
    <div style={style}>
      <h1>{children}</h1>
    </div>
  );
};

export default Component;
