const container = document.querySelector('.container');
const pics = ['Blackpink_PUBG_210321.jpg', 'NewJeans_theMEGASTUDY.jpg','191130_부산아이파크_VS_FC안양_플레이오프,_조규성_2.jpg'];

container.style.backgroundImage = `url(./img/${pics[0]})`;

const arrows = document.querySelectorAll('.arrow');
let i = 0;

arrows.forEach(arrow => {
  arrow.addEventListener('click', e => {
    if(e.target.id === 'left') {
      i--;
      if(i < 0) i = pics.length - 1;
    } else if(e.target.id === 'right') {
      i++;
      if(i >= pics.length) i = 0;
    }
    container.style.backgroundImage = `url(./img/${pics[i]})`;
  })
})