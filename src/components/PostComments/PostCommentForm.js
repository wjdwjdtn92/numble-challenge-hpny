import classes from './PostCommentForm.module.css';

export default function PostCommentForm({ $target, onSubmit }) {
  this.$element = document.createElement('form');
  this.$element.className = classes['post-comment-form'];
  $target.appendChild(this.$element);

  this.render = async () => {
    this.$element.innerHTML = '';

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <input 
        class=${classes['post-comment-form__input']}
        type="text" 
        name="post-comment-input"
        placeholder="댓글 내용을 입력해주세요"
      />
      <button 
        aria-label="댓글 작성하기 버튼"
        class=${classes['post-comment-form__button']}
      >
        입력
      </button>
      `,
    );
  };

  this.render();

  this.$element.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(this.$element);

    for (const value of formData.values()) {
      if (value.trim().length === 0) {
        return;
      }
    }

    onSubmit({
      content: formData.get('post-comment-input'),
    });
  });
}
