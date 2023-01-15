export default function PostDetailPage({ $target }) {
  const $page = document.createElement('section');
  $page.className = 'post-detail-section';
  $target.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
    <div class="post-detail">
      post detail page
    </div>`;
  };

  this.render();
}
