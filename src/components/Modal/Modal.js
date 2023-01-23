import style from './Modal.module.css';

export default function Modal({ $target }) {
  this.$element = document.createElement('div');
  this.$element.className = style['modal-container'];
  this.$element.id = 'modal';
  $target.appendChild(this.$element);
}
