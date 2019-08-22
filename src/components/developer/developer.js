import React from 'react';
import styles from './developer.module.css';

export default ({ name, githubName, photoURL }) => (
  <div className={styles.developerCard}>
    <img
      src={photoURL}
      alt={`${name}`}
      className={styles.developerPicture}
      height="150"
      width="150"
    />
    <span>{name}</span>
    <a href={`https://github.com/${githubName}`} className={styles.githubLink}>
      {`github: @${githubName}`}
    </a>
  </div>
);
