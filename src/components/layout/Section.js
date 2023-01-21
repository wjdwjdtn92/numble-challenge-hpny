import classes from './Section.module.css';

export default function Section({ $target }) {
  this.$element = document.createElement('section');
  this.$element.className = classes['section'];

  this.render = async () => {
    $target.appendChild(this.$element);
  };

  this.render();
}
