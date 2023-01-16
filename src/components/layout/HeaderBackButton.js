import Icon from '../../assets/images/icon_arrow_back.svg';
import { routeChage } from '../../router';

export default function HeaderBackButton({ $target }) {
  const $button = document.createElement('button');
  $button.className = 'button';
  $target.appendChild($button);

  this.render = () => {
    $button.innerHTML = `<img src=${Icon} alt="뒤로가기 이미지"/>`;
    console.log($button);
  };

  this.render();
}
