export default function PostComments({ $target, initialState, onDelete }) {
  this.state = initialState;
  const $PostComment = document.createElement('ul');
  $PostComment.className = 'post-detail';
  $target.appendChild($PostComment);

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = [...newState];

    this.render();
  };

  this.render = () => {
    $PostComment.innerHTML = '';

    const comments = this.state
      .map((comment) => {
        return `
        <li data-comment-id=${comment.commentId}>
          <span>${comment.content}</span>
          <button>삭제</button>
        </li>
        `;
      })
      .join('');

    $PostComment.insertAdjacentHTML('beforeend', comments);
  };

  this.render();

  $PostComment.addEventListener('click', (event) => {
    const $li = event.target.closest('li');
    const { commentId } = $li.dataset;

    if ($li) {
      if (event.target.tagName === 'BUTTON') {
        onDelete(commentId);
      }
    }
  });
}
