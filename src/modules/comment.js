import commentsCounter from "./commentCounter.js";

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appKey = 'TVh1v8c5aHUNyfocTFww';

const commentsHeader = document.querySelector('.comments-container h4');

const getComments = async(id) => {
    commentsHeader.innerHTML = 'Comments (0)';
    await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)
        .then((reponse) => reponse.json())
        .then((json) => {
            commentsCounter(json, commentsHeader);
            const commentsList = document.querySelector('.comments-generator');
            commentsList.innerHTML = '';
            json.map((comment, index) => {
                const newComment = document.createElement('li');
                if (index % 2 !== 0) {
                    newComment.classList.add('row-bg');
                }
                newComment.innerHTML = `<span class="date">${comment.creation_date}</span><span class="userName">${comment.username}:</span> <span
              class="comment-text">${comment.comment}</span>`;
                commentsList.appendChild(newComment);
            }).join('');
        });
};

const postComment = async(username, comment, id) => {
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