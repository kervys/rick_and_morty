import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar.jsx'
import styles from '../nav/Nav.module.css'


export default function Nav({onSearch}) {
  return (
    <div className={styles.barra}>
      <div className={styles.home}>
        <Link to="/home" >Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>

  );
}
