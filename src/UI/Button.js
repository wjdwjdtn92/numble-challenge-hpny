export default function Button({
  $target,
  onClick,
  $children = '',
  attributes = {},
}) {
  const $button = document.createElement('button');
  Object.assign($button, attributes);

  if ($children instanceof HTMLElement) {
    $button.append($children);
  } else {
    $button.innerHTML = $children;
  }
  $target.appendChild($button);

  console.log(onClick);
  $button.addEventListener('click', () => {
    alert(1);
  });
}
