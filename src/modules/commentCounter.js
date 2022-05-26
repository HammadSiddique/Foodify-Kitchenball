const commentsCounter = (data, link) => {
    if (data.length) {
        link.innerHTML = `Comments (${data.length})`;
    }
    return data.length;
};
export default commentsCounter;