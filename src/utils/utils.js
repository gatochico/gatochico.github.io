export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};