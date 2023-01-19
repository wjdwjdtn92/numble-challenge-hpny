export default function PostDetail({ $target, initialState, onEdit }) {
  this.state = initialState;
  const $postDetail = document.createElement('article');
  $postDetail.className = 'post-detail';
  $target.appendChild($postDetail);

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  };

  this.render = () => {
    if (JSON.stringify(this.state) === '{}') {
      return;
    }
    $postDetail.innerHTML = '';

    const { postId, title, content, image, createdAt } = this.state;
    const date = new Date(createdAt).toLocaleDateString();

    $postDetail.insertAdjacentHTML(
      'beforeend',
      `<img src="${image}" alt="${title}"/>
      <h2 class="title">${title}</h2>
      <span class="date">${date.slice(0, -1)}</span>
      <p class="content">${content}</p>
      <button id="post-edit-button">수정</button>
      <button id="post-delete-button">삭제</button>
      `,
    );
  };

  this.render();

  $postDetail.addEventListener('click', (event) => {
    const $button = event.target.closest('button');

    if (!$button) {
      return;
    }

    if ($button.id === 'post-edit-button') {
      onEdit(this.state.postId);
      return;
    }

    if ($button.id === 'post-delete-button') {
      onEdit(this.state.postId);
      return;
    }
  });
}
