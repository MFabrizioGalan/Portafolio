import React, { useState } from 'react';
import styles from './Hamburguesa.module.css';

const HamburguerMenu = ({ isOpen, toggleMenu }) => (
    <div className={styles.menu} onClick={toggleMenu}>
      <div className={isOpen ? `${styles.bar} ${styles.open1}` : styles.bar}>Acerca de</div>
      <div className={isOpen ? `${styles.bar} ${styles.open2}` : styles.bar}>Experiencia</div>
      <div className={isOpen ? `${styles.bar} ${styles.open3}` : styles.bar}>Trabajos</div>
      <div className={isOpen ? `${styles.bar} ${styles.open3}` : styles.bar}>Contacto</div>
      <div className={isOpen ? `${styles.bar} ${styles.open3}` : styles.bar}>Resumen</div>
    </div>
);


export default HamburguerMenu;
