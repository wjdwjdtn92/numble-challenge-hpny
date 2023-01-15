export default function PostListPage({ $target }) {
  const $page = document.createElement('section');
  $page.className = 'post-list-section';
  $target.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
    <div class="posts">
      post list page
    </div>`;
  };

  this.render();
}
