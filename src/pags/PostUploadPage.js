export default function PostUploadPage({ $target }) {
  const $page = document.createElement('section');
  $page.className = 'post-upload-section';
  $target.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
    <div class="post-upload">
      post upload page
    </div>`;
  };

  this.render();
}
