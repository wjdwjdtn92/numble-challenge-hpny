import HeaderBackButton from './HeaderBackButton';

export default function HeaderNav({ $target, props }) {
  this.props = props;
  const $nav = document.createElement('nav');
  $nav.className = 'nav';
  $target.appendChild($nav);

  this.render = () => {
    if (this.props) {
      new HeaderBackButton({ $target: $nav });
    }

    $nav.innerHTML += `
      <h1 class="title">
        HPNY 2023
      </h1>
    `;
  };

  this.render();
}
