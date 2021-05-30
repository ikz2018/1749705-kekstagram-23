function randomRange (myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
/* А также придумайте, как функция должна вести себя, если передать значение «до» меньшее,
 чем значение «от», или равное ему.
 Сложность с этим моментом.
*/

let comment = document.querySelector('.social__footer-text');
let commentsCount = document.querySelector('.comments-count');
let commentWidth = comment.length;
let maxWidthComment = commentsCount.textContent;

function commentLength (commentWidth, maxWidthComment) {
  if (commentWidth <= maxWidthComment) {
    return true
  }
  return false;
}
