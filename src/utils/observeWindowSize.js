import throttle from 'lodash.throttle';

const observeWindowSize = (onChangeCallback) => {
  const handleResize = throttle(({ target }) => {
    onChangeCallback({
      width: target.innerWidth,
      height: target.innerHeight,
    });
  }, 100);

  handleResize({ target: window });

  window.addEventListener('resize', handleResize);
};

export default observeWindowSize;
