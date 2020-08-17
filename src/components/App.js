import React from 'react';
import Component from './Component';
import Route from './Route';

const App = () => {
  return (
    <div className="ui segment">
      <Route path="/">
        <Component>Home</Component>
      </Route>
      <Route path="/foo">
        <Component color="red">Foo</Component>
      </Route>
      <Route path="/bar">
        <Component color="blue">Bar</Component>
      </Route>
      <Route path="/baz">
        <Component color="green">Baz</Component>
      </Route>
    </div>
  );
};

export default App;
