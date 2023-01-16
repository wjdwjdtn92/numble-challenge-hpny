import HeaderNav from './HeaderNav';

export default function Header({ $target, initialState }) {
  this.state = initialState;
  const $header = document.createElement('header');
  $header.className = 'header';
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
    new HeaderNav({ $target: $header, props: this.state });
  };

  this.render();

  $header.addEventListener('click', (event) => {
    const $button = event.target.closest('button');

    if ($button) {
      history.back();
    }
  });
}
