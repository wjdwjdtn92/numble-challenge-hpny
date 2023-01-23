import classes from './Section.module.css';

export default function Section({ $target, iniatailState }) {
  this.$element = document.createElement('section');
  this.$element.className = classes['section'];
  this.sate = iniatailState;
  $target.appendChild(this.$element);

  this.setState = (newState) => {
    if (this.sate === newState) {
      return;
    }

    this.state = newState;
    this.render();
  };

  this.render = async () => {
    this.$element.innerHTML = `
      <h2 class="screen-reader-text">${this.state}</h2>
    `;
  };

  // this.render();
}
