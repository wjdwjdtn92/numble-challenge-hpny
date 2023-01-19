import classes from './ImageSkeleton.module.css';

export default function ImageSkeleton({
  $target,
  $children = '',
  attributes = {},
  dataSrc,
  dataAlt,
}) {
  this.$element = document.createElement('div');
  Object.assign(this.$element, attributes);
  this.$element.classList.add(classes.placeholder);
  this.$element.dataset.src = dataSrc;
  this.$element.dataset.alt = dataAlt;
  console.log(this.$element);

  if ($children instanceof HTMLElement) {
    this.$element.append($children);
  } else {
    this.$element.insertAdjacentHTML('beforeend', $children);
  }
  $target.appendChild(this.$element);
}
