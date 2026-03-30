import { motion } from 'framer-motion';

const directionMap = {
  up:    { y: 40, x: 0 },
  down:  { y: -40, x: 0 },
  left:  { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none:  { y: 0, x: 0 },
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const { x, y } = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default AnimatedSection;
