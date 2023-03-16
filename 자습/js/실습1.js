let button = document.querySelector('button');

button.addEventListener('click', () => {
  let testNode = document.createElement('p'); // button누를시 p태그로 나오는 요소
  let testTextNode = document.createTextNode('MariaDB'); // button누를시 나오는 텍스트 만들기
  testNode.appendChild(testTextNode);
  // querySelector() : 제공한 선택자 또는 선택자 뭉치와 일치하는
  // 문서 내 첫 번째 요소를 반환한다.
  // 선택자를 만족하는 모든 요소의 목록이 필요하다면 querySelectorAll()을 사용
  let p = document.querySelectorAll('p')[2]; // p태그를 만족하는 모든 요소중 index[2]째
  document.body.insertBefore(testNode, p); // insertBefore : 특정요소의 앞에 추가하는 메서드
})