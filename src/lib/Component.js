export default function Component({
  $target,
  tag,
  onClick,
  $children = '',
  attributes = {},
}) {
  const $button = document.createElement(tag);
  Object.assign($button, attributes);

  if ($children instanceof HTMLElement) {
    $button.append($children);
  } else {
    $button.innerHTML = $children;
  }
  $target.appendChild($button);

  $button.addEventListener('click', onClick);
}
