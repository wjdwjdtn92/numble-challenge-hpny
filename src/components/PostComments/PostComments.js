import classes from './PostComments.module.css';

export default function PostComments({ $target, initialState, onDelete }) {
  this.state = initialState;
  this.$element = document.createElement('ul');
  this.$element.className = classes['post-comments'];
  $target.appendChild(this.$element);

  this.setState = (newState) => {
    if (this.state.length !== newState.length) {
      this.state = [...newState];

      this.render();
      return;
    }

    newState.forEach((comment, index) => {
      if (
        comment.content !== this.state[index].comment ||
        comment.commentId !== this.state[index].commentId
      ) {
        this.state = [...newState];

        this.render();
        return;
      }
    });
  };

  this.render = () => {
    this.$element.innerHTML = '';

    const comments = this.state
      .map((comment) => {
        return `
        <li
          class=${classes['post-comment']}
          data-comment-id=${comment.commentId}
        >
          <h3 class=${classes['post-comment__content']}>${comment.content}</h3>
          <button class=${classes['post-comment__remove-button']}>삭제</button>
        </li>
        `;
      })
      .join('');

    this.$element.insertAdjacentHTML('beforeend', comments);
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');
    const { commentId } = $li.dataset;

    if ($li) {
      if (event.target.tagName === 'BUTTON') {
        onDelete(commentId);
      }
    }
  });
}
