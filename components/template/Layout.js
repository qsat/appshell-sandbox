import React from 'react';

const styles = {
  root: {
    width: 500,
  },
};

const Footer = (props) => <footer>Footer</footer>;

export default ({ children }) => (
  <div>
    { children }
    <Footer />
  </div>
)
