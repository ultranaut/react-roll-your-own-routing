import React from 'react';
import Link from './Link';

const Navigation = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" href="/">
        Home
      </Link>
      <Link className="item" href="/foo">
        Foo
      </Link>
      <Link className="item" href="/bar">
        Bar
      </Link>
      <Link className="item" href="/baz">
        Baz
      </Link>
    </div>
  );
};

export default Navigation;
