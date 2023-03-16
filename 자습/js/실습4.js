let title = document.querySelector('#title');
let author = document.querySelector('#author');
let save= document.querySelector('#save');
let bookList = document.querySelector('#bookList');

save.addEventListener('click', (e) => {
  e.preventDefault();

  let item = document.createElement('li'); // li 태그 생성
  item.innerHTML = `
    ${title.value} - ${author.value}
    <span class="delBtn">삭제</span>
    `;
    bookList.appendChild(item);

    title.value = "";
    author.value = "";

    // bookList에서 삭제
    let delButtons = document.querySelectorAll(".delBtn");

    for(let delButton of delButtons) {
      delButton.addEventListener('click', removeItem);
    }
});
function removeItem() {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}