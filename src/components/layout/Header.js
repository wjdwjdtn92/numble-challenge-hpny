import Icon from '../../assets/images/icon_arrow_back.svg';

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
    const bakcButton = this.state
      ? `<button aria-label="뒤로가기 버튼">
          <img src=${Icon} alt="뒤로가기 이미지"/>
        </button>`
      : '';

    $header.innerHTML = `
    <nav class="navigation">
      ${bakcButton}
      <h1 class="title">
        HPNY 2023
      </h1>
    </nav>
    `;
  };

  this.render();
}
