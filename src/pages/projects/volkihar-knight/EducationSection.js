import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TimelineItem = ({ date, institution, description, delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, type: 'spring', stiffness: 100 },
    });
  }, [controls, delay]);

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="content">
        <p className="date">{date}</p>
        <p className="institution">{institution}</p>
        <p className="description">{description}</p>
      </div>
      <style>{`
        .timeline-item {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          height: 150px; /* Adjust as needed */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content {
          text-align: center;
        }

        .date {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .institution {
          font-style: italic;
          margin-bottom: 5px;
        }

        .description {
          color: #666;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.div>
  );
};

const Timeline = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          institution={item.institution}
          description={item.description}
          delay={index * 0.2}
        />
      ))}
      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Timeline;
