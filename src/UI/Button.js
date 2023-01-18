export default function Button({ $target, $children = '', attributes = {} }) {
  const $button = document.createElement('button');
  Object.assign($button, attributes);

  if ($children instanceof HTMLElement) {
    $button.append($children);
  } else {
    $button.insertAdjacentHTML('beforeend', $children);
  }
  $target.appendChild($button);
}
