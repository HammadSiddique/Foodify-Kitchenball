const itemsCounter = (data, link) => {
  link.innerHTML = `Recipes(${data.length})`;
  return data.length;
};

export default itemsCounter;
