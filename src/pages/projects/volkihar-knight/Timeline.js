import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Timeline.module.css';

const Timeline = ({ timelineData }) => {
  return (
    <div className={styles['timeline-container']}>
      {timelineData.map((event, index) => (
        <TimelineItem key={event.id} event={event} index={index} />
      ))}
    </div>
  );
};

const TimelineItem = ({ event, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className={styles['timeline-item']}
      custom={index}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{event.date}</h3>
      <p>{event.description}</p>
      <div className={styles['timeline-details']}>
        <p><strong>Institution:</strong> {event.institution}</p>
        <p><strong>Grade:</strong> {event.grade}</p>
      </div>
      <div className={styles['glitch-effect']} />
    </motion.div>
  );
};

export default Timeline;
