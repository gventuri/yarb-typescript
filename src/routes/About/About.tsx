import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './About.module.scss';

import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

const About: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Logo />
        <p>This is the About page</p>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </header>
    </div>
  );
};

export default About;
