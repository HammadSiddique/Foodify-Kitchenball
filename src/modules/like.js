const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TVh1v8c5aHUNyfocTFww/likes";
const getLikes = async () => {
  const cards = document.querySelectorAll(".card");
  const likeCount = document.querySelectorAll(".like-count");
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};
const likeInteract = async () => {
  const likeBtns = document.querySelectorAll(".like-btn");
  const likeBtnIcon = document.querySelectorAll(".fa-heart");
  const likeBtnCount = document.querySelectorAll(".like-count");
  const cards = document.querySelectorAll(".card");
  likeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      likeBtnIcon[index].classList.remove("fa-regular");
      likeBtnIcon[index].classList.add("fa-solid");
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    });
  });
};
export { getLikes, likeInteract };
