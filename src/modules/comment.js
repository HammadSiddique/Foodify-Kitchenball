const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appKey = 'TVh1v8c5aHUNyfocTFww';

const commentsHeader = document.querySelector('.comments-container h4');

const getComments = async (id) => {
  commentsHeader.innerHTML = 'Comments (0)';
  await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)
    .then((reponse) => reponse.json())
    .then((json) => {
      if (json) {
        const commentsList = document.querySelector('.comments-generator');
        commentsList.innerHTML = '';
        json.forEach((item) => {
          const newComment = document.createElement('li');

          newComment.innerHTML = `<span class="date">${item.creation_date}</span>
                    <span class="user-name">${item.username}:</span> 
                    <span class="comment-text">${item.comment}</span>`;
          commentsList.appendChild(newComment);
        });
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