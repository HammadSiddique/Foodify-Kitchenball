const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appKey = 'TVh1v8c5aHUNyfocTFww';

const commentsHeader = document.querySelector('.comments-container h4');

const counter = (count) => count + 1;

const getComments = async (id) => {
  let count = 0;
  commentsHeader.innerHTML = 'Comments (0)';

  await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)
    .then((reponse) => reponse.json())
    .then((json) => {
      if (json) {
        const commentsList = document.querySelector('.comments-generator');
        commentsList.innerHTML = '';
        json.forEach((item) => {
          count = counter(count);
          const newComment = document.createElement('li');
          if (count % 2 === 0) {
            newComment.classList.add('row-bg');
          }
          if (count !== 0) {
            newComment.innerHTML = `<span class="date">${item.creation_date}</span>
                    <span class="user-name">${item.username}:</span> 
                    <span class="comment-text">${item.comment}</span>`;
            commentsList.appendChild(newComment);
          } else {
            newComment.innerHTML = '<span>There are no comments yet!!</span>';
          }
        });
        commentsHeader.innerHTML = `Comments (${count})`;
      }
    });
};

const postComment = async (username, comment, id) => {
  await fetch(`${baseURL}${appKey}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    getComments(id);
  });
};

export { postComment, getComments };