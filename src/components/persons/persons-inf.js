import React from 'react';
import Timeline from './time-line';
import PersonsWork from './persons-work';
import Video from './YouTube';
import Map from './YandexMap';
import Gallary from './gallary';
import styles from './persons-inf.module.css';

export default ({ name, picture, birthDate, deathDate, lifeEvents, works, video, coordinates, pictures }) => (
    <div>
      <img src={picture} className={styles.portret} alt={`${name}`} />
      <h1>{name}</h1>
      <p>{birthDate} - {(deathDate !== 'Invalid date')?deathDate:'p.t.'}</p>
      <Video
        videoId = {video}
      />
      <Gallary
        pictures = {pictures}
      />
      <Timeline
        lifeEvents = {lifeEvents}
      />
      <PersonsWork 
        works = {works}
      />
      <Map 
        markets = {coordinates}
      />
    </div>
  );