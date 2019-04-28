import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Home.module.scss';

import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

const Home: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Logo />
        <p>This is the Home page</p>
        <Link className={styles.link} to="/about">
          About
        </Link>
      </header>
    </div>
  );
};

export default Home;
