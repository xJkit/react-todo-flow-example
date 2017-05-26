// @flow

import React from 'react';
import '../styles/Header.css';

type Props = {
  title: number,
};

const Header = (props: Props) => {
  return (
    <div className="header">{props.title}</div>
  )
}

export default Header;
