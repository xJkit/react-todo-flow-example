// @flow

import React from 'react';
import styles from '../styles/Header.css';

type Props = {
  title: number,
};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>{props.title}</div>
  )
}

export default Header;
