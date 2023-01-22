export async function imageLoad(sourceClass) {
  const $placeholders = document.querySelectorAll('.placeholder');

  $placeholders.forEach(($placeholder) => {
    const $img = document.createElement('img');
    $img.src = $placeholder.dataset.src;
    $img.alt = $placeholder.dataset.alt;
    $img.className = sourceClass;

    $placeholder.removeAttribute('data-src');
    $placeholder.removeAttribute('data-alt');

    $img.addEventListener('load', () => {
      setTimeout(() => {
        $placeholder.appendChild($img);
      });
    });
  });
}
