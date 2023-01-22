export default {
  hidden: {
    x: "-100vw",
    transition: {
      type: "tween",
      when: "beforeChildren",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      when: "beforeChildren",
      delayChildren: 2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
