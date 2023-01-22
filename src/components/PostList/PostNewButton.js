import newBtnImg from '../../assets/images/icon_new_btn.svg';
import Button from '../UI/Button';
import classes from './PostNewButton.module.css';

export default function PostNewButton({ $target, onClick }) {
  this.render = async () => {
    const $children = `
      <img src=${newBtnImg} alt="작성하기 아이콘"/>
      새 글 작성하기
    `;

    new Button({
      $target,
      $children,
      attributes: {
        className: classes['post-new-button'],
        ariaLabel: '새 글 작성하기 버튼',
        onclick: onClick,
      },
    });
  };

  this.render();
}
