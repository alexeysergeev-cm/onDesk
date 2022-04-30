export const pressEnter = (e, callback) => {
  if (e.keyCode === 13) {
    callback(e);
  }
};
