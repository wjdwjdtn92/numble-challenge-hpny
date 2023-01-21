import { routeChage } from '../../router';
import classes from './Header.module.css';

export default function Header({ $target, initialState }) {
  this.state = initialState;
  this.$element = document.createElement('header');
  this.$element.className = classes.header;
  $target.appendChild(this.$element);

  this.setState = async (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = newState;
    this.render();
  };

  this.render = async () => {
    this.$element.innerHTML = '';
    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <nav class=${classes['header__nav']}>
        ${
          this.state
            ? `
            <button class=${classes['header__nav-back-button']} id="back-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  fill="none"
                  viewBox="0 0 33 33"
                >
                  <path
                    fill="currentColor"
                    d="M18.94 25.475a1.334 1.334 0 0 1-1.04-.494l-6.44-8a1.333 1.333 0 0 1 0-1.693l6.667-8a1.335 1.335 0 1 1 2.053 1.707l-5.96 7.146 5.76 7.147a1.333 1.333 0 0 1-1.04 2.187Z"
                  />
                </svg>
              </button>
            `
            : ''
        }
        <h1 class=${classes['header__nav-title']}>
          HPNY 2023
        </h1>
        <button 
          class=${classes['header__nav-new-button']}  
          id="post-new-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.667"
              d="M20 1.333H4A2.667 2.667 0 0 0 1.333 4v16A2.667 2.667 0 0 0 4 22.667h16A2.667 2.667 0 0 0 22.667 20V4A2.667 2.667 0 0 0 20 1.333ZM8 12h8m-4-4v8"
            />
          </svg>
        </button>
      </nav>
    `,
    );
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    if (event.target.tagName === 'H1') {
      const { pathname } = location;
      if (pathname !== '/') {
        routeChage('/');
      }
      return;
    }

    const $button = event.target.closest('button');

    if (!$button) {
      return;
    }

    if ($button.id === 'post-new-button') {
      routeChage('/upload');
      return;
    }

    if ($button.id === 'back-button') {
      history.back();
      return;
    }
  });
}
