export default function PostItem({ $target, props }) {
  this.props = props;
  const $post = document.createElement('li');
  $post.className = 'post';
  $target.appendChild($post);

  this.render = () => {
    if (!this.props) {
      return;
    }

    const { postId, title, createdAt, content, image } = this.props;
    const date = new Date(createdAt).toLocaleDateString();
    $post.dataset.postId = postId;

    $post.innerHTML = `
      <h3 class="post-title">${title}</h3>
      <p class="post-content">${content}</p>
      <div class="post-date">${date}</div>
      <img class="post-image" src=${image} />
    `;
  };

  this.render();
}
