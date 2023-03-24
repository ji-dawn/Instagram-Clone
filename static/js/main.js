const commentForm = document.querySelector(".comments_form");
const comments = document.querySelector("#comment_input");
const submitButton = document.querySelector(".btn span");

function commentUpdate() {
  const ulbox = document.querySelector(".comments_info.comment_list_ul");
  const liBox = document.createElement("li");
  const pBox = document.createElement("div");
  const userBox = document.createElement("span");
  const deleteIcon = document.createElement("i");
  const heartIcon = document.createElement('i');
  const commentCtnBox = document.createElement("span");
  let user = "_SSANG";

  userBox.setAttribute("class", "user_id");
  commentCtnBox.setAttribute("class", "comment_contents");
  pBox.setAttribute("class", "comments_tit");
  deleteIcon.setAttribute("class", "fa-regular fa-trash-can");
  heartIcon.setAttribute('class','fa-regular fa-heart');

  userBox.innerHTML = user;
  commentCtnBox.innerHTML = comments.value;

  pBox.appendChild(userBox);
  pBox.appendChild(commentCtnBox);
  pBox.appendChild(heartIcon);
  pBox.appendChild(deleteIcon);
  liBox.appendChild(pBox);
  ulbox.appendChild(liBox);
  comments.value = "";

  deleteIcon.addEventListener("click", function () {
    commentCtnBox.remove();
    deleteIcon.remove();
    userBox.remove();
    heartIcon.remove();
  });

heartIcon.addEventListener("click",function(){
  if ($(heartIcon).hasClass("fa-regular")) {
    heartIcon.classList = "fa-solid fa-heart";
    heartIcon.setAttribute("css", "color:red");
    heartIcon.style.color = "red";
  } else {
    heartIcon.classList = "fa-regular fa-heart";
    heartIcon.style.color = "black";
  }
})
}

let heart = document.querySelector(".fa-regular");
let likenumber = document.querySelector(".likes_number");
heart.addEventListener("click", function () {
  if ($(heart).hasClass("fa-regular")) {
    heart.classList = "fa-solid fa-heart";
    heart.setAttribute("css", "color:red");
    heart.style.color = "red";
    likenumber.innerText = parseInt(likenumber.innerText) + 1;
  } else {
    heart.classList = "fa-regular fa-heart";
    heart.style.color = "black";
    likenumber.innerText = parseInt(likenumber.innerText) - 1;
  }
});


commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitButton.addEventListener("click", commentUpdate);

comments.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    commentUpdate();
  }
});

comments.addEventListener("keyup", function (e) {
  let commentValue = comments.value;

  if (commentValue.length > 0) {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.color = "#1c7ed6";
  } else {
    submitButton.disabled = true;
    submitButton.style.cursor = "default";
    submitButton.style.color = "#bfdffd";
  }
});

