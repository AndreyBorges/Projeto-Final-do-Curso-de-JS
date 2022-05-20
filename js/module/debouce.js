const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
};

export default debounce;
