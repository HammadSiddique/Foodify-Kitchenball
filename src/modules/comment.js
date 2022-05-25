// const invloveUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appKey = 'TVh1v8c5aHUNyfocTFww';

// const getComments = async(id) => {
//     const response = await fetch(`${invloveUrl}/apps/${appKey}/comments?item_id=52807`);
//     const data = await response.json();
//     return data.length > 0 ? data : [];
// };

const commentPopup = document.querySelector('#popup');

const getComments = async (id) => {
  console.log(id);
  const html = `
            <div id='comments-container'>
                <div class='comment-items'>
                    <div class="close-btn-container">
                        <i id="close" class="fa-solid fa-xmark"></i>
                    </div>
                    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <h2 class='dish-name'>Grilled Steak</h2>
                    <p class='recipe-descip'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h3 class='comment-header'>Comments</h3>
                    <div id="commets-generator"></div>
                    <div class="add-new-comment">
                        <h2 class="form-header">Add a Comment</h2>
                        <form class="form">
                            <input class="name" type="text" name="name" placeholder="Your name" pattern="[a-zA-Z ]{1,30}" required>
                            <textarea class="new-comment" name="comment" placeholder="Write your comment here" pattern="[a-zA-Z9-0 ]{1,200}" required></textarea>
                            <input class="btn" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>`;
  commentPopup.innerHTML = html;
  commentPopup.parentElement.classList.add('showComment');
};

const closeComment = document.querySelector('#close');
closeComment.addEventListener('click', () => {
  document.getElementById('comments-container').classList.add('hidden');
});

export default getComments;