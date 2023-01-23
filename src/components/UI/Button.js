import style from './Button.module.css';

export default function Button({ $target, $children = '', attributes = {} }) {
  this.$element = document.createElement('button');
  Object.assign(this.$element, attributes);
  this.$element.classList.add(style.button);

  if ($children instanceof HTMLElement) {
    this.$element.append($children);
  } else {
    this.$element.insertAdjacentHTML('beforeend', $children);
  }
  $target.appendChild(this.$element);
}
