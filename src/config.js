module.exports = {
  srConfig: (
    delay = 200,
    interval = 0,
    container = document.documentElement
  ) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    interval,
    container,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
  }),
};
