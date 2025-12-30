import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedSection({ children, className = '', motionProps = {} }) {
  const reduce = useReducedMotion()

  const baseInitial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
  const baseWhileInView = { opacity: 1, y: 0 }

  return (
    <motion.section
      initial={motionProps.initial ?? baseInitial}
      whileInView={motionProps.whileInView ?? baseWhileInView}
      viewport={motionProps.viewport ?? { once: true, margin: '-100px' }}
      transition={motionProps.transition ?? { duration: 0.8, ease: 'easeOut' }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.section>
  )
}