const scrollTo = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 550);
  } else {
    window.scrollTo(0, 450);
  }
};

export default scrollTo;
