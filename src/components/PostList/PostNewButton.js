import newBtnImg from '../../assets/images/icon_new_btn.svg';
import Button from '../../UI/Button';

export default function PostNewButton({ $target, onClick }) {
  this.render = () => {
    const $children = `
      <img src=${newBtnImg} alt="new post icon"/>
      새 글 작성하기
    `;

    new Button({
      $target,
      $children,
      attributes: {
        className: 'button',
        ariaLabel: '새 글 작성하기 버튼',
      },
      onClick: onClick,
    });
  };

  this.render();
}
