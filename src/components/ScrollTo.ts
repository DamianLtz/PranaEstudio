const scrollTo = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 550);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 500);
  } else if (window.screen.width <= 1366) {
    window.scrollTo(0, 525);
  } else {
    window.scrollTo(0, 575);
  }
};

export default scrollTo;
