import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    // don't break browser's built-in "open in new tab" functionality
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // we'll handle this, thank you
    e.preventDefault();
    // "navigate" to href without causing a page refresh
    window.history.pushState({}, '', href);
    // fire a navigation event
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
