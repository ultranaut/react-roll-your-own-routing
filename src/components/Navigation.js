import React from 'react';

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <a className="item" href="/">
        Home
      </a>
      <a className="item" href="/foo">
        Foo
      </a>
      <a className="item" href="/bar">
        Bar
      </a>
      <a className="item" href="/baz">
        Baz
      </a>
    </div>
  );
};

export default Navigation;
