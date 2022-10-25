export const delay = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
