import newBtnImg from '../../assets/images/icon_new_btn.svg';

export default function PostNewButton({ $target }) {
  const $button = document.createElement('button');
  $button.className = 'button';
  $button.ariaLabel = '새 글 작성하기 버튼';
  $target.appendChild($button);
  console.log('asdasd');

  this.render = () => {
    $button.innerHTML = `
      <img src=${newBtnImg} alt="new post icon"/>
      새 글 작성하기
    `;
  };

  this.render();
}
