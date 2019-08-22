import React from 'react';
import PhotographerCard from '../photographerCard/photographerCard';
import styles from './listPhotographers.module.css';
import { parseCmsDate } from '../../utils';

export default ({ elems }) => (
  <ul className={styles.photographersList}>
    {elems.map(elem => {
      const [name, picture, birthDate, deathDate, , slug] = elem;
      return (
        <PhotographerCard
          key={name}
          photoURL={picture}
          name={name}
          slug={slug}
          birthDate={parseCmsDate(birthDate)}
          deathDate={parseCmsDate(deathDate)}
        />
      );
    })}
  </ul>
);
