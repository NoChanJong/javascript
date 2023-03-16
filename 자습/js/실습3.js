let li_lists = document.querySelectorAll('li'); // 모든 li 태그 선택

for(let li of li_lists) {
  li.addEventListener('click', function() {
    // this.parentNode.removeChild(this);
    this.remove(this);
  })
}