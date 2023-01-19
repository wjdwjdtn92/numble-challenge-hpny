export default function Card({ $target, $children, classes }) {
  this.$element = document.createElement('div');
  this.$element.className = `card`;
  this.$element.classList.add(classes);

  if ($children instanceof HTMLElement) {
    this.$element.append($children);
  } else {
    this.$element.insertAdjacentHTML = $children;
  }

  $target.appendChild(this.$element);
}
