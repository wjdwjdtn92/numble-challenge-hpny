import classes from './Main.module.css';

export default function Main({ $target }) {
  this.$element = document.createElement('main');
  this.$element.className = classes.main;

  this.render = () => {
    $target.appendChild(this.$element);
  };

  this.render();
}
