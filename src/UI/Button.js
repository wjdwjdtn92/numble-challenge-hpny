import Component from '../lib/Component';

export default function Button({
  $target,
  onClick,
  $children = '',
  attributes = {},
}) {
  const tag = 'button';

  Component({
    $target,
    $children,
    attributes,
    onClick,
    tag,
  });
}
