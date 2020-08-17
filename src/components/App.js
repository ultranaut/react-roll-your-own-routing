import React from 'react';
import Component from './Component';

const App = () => {
  return (
    <div className="ui segment">
      <Component color="red">Component #1</Component>
      <Component color="blue">Component #2</Component>
      <Component color="green">Component #3</Component>
    </div>
  );
};

export default App;
