import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  name,
  as: Component = 'section',
}) {
  return (
    <Component id={id} name={name} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-60px' }}
        variants={{
          hidden: defaultVariants.hidden,
          visible: {
            ...defaultVariants.visible,
            transition: {
              ...defaultVariants.visible.transition,
              delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
