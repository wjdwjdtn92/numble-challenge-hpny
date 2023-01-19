import Icon from '../../assets/images/icon_arrow_back.svg';
import { routeChage } from '../../router';
import classes from './Header.module.css';

export default function Header({ $target, initialState }) {
  this.state = initialState;
  const $header = document.createElement('header');
  $header.className = classes.header;
  $target.appendChild($header);

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = newState;
    this.render();
  };

  this.render = () => {
    $header.innerHTML = '';
    $header.insertAdjacentHTML(
      'beforeend',
      `
      <nav class=${classes['header__nav']}>
        ${
          this.state
            ? `<button class=${classes['header__nav-back-button']}>
              <img src=${Icon} alt="뒤로가기 이미지"/>
              </button>`
            : ''
        }
        <h1 class=${classes['header__nav-title']}>
          HPNY 2023
        </h1>
      </nav>
    `,
    );
  };

  this.render();

  $header.addEventListener('click', (event) => {
    const $nav = event.target.closest('nav');
    console.log($nav);

    if (!$nav) {
      return;
    }

    if (event.target.tagName === 'BUTTON') {
      history.back();
      return;
    }

    if (event.target.tagName === 'H1') {
      const { pathname } = location;
      if (pathname !== '/') {
        routeChage('/');
      }
      return;
    }
  });
}
