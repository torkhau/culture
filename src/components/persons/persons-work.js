import React from 'react';
import styles from './persons-work.module.css';

export default ({ works }) => (
    <table className={styles.works}>
        <tbody>
            {works.map( (obj, index) => (
                <tr className={styles.worksTh} key={index.toString()}>
                    <th className={styles.worksTd}>{obj.date}</th>
                    <th className={styles.worksTd}>{obj.title}</th>
                </tr>
            ))}
        </tbody>
    </table>
  );