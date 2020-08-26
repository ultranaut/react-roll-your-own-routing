import React from 'react';
import Route from './Route';
import Navigation from './Navigation';

const App = () => {
  return (
    <div className="ui segment">
      <Navigation />
      <Route path="/">Home</Route>
      <Route path="/foo">Foo</Route>
      <Route path="/bar">Bar</Route>
      <Route path="/baz">Baz</Route>
    </div>
  );
};

export default App;
