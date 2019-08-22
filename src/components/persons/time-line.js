import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default ({ lifeEvents }) => (
  <Timeline>
    {lifeEvents.map( (obj, index) => (
      <TimelineItem
        key = {index.toString()}
        dateText = {obj.date}
        style = {{ color: '#e86971' }}
      >
        <p>{obj.desctiption}</p>
      </TimelineItem>
    ))}
  </Timeline>
);