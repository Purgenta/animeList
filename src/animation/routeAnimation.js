const transition = {
  type: "tween",
  when: "beforeChildren",
  duration: 0.35,
  ease: "easeInOut",
};
export default {
  hidden: {
    x: "-100vw",
    transition,
  },
  visible: {
    x: 0,
    transition,
  },
  exit: {
    x: "100vw",
    transition,
  },
};
