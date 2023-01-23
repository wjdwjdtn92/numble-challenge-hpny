import style from './PostCommentForm.module.css';

export default function PostCommentForm({ $target, onSubmit }) {
  this.$element = document.createElement('form');
  this.$element.className = style['post-comment-form'];
  $target.appendChild(this.$element);

  this.render = async () => {
    this.$element.innerHTML = '';

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <input 
        class=${style['post-comment-form__input']}
        type="text" 
        name="post-comment-input"
        placeholder="댓글 내용을 입력해주세요"
      />
      <button 
        aria-label="댓글 작성하기 버튼"
        class=${style['post-comment-form__button']}
      >
        입력
      </button>
      `,
    );
  };

  this.render();

  this.$element.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(this.$element);

    for (const value of formData.values()) {
      if (value.trim().length === 0) {
        return;
      }
    }

    await onSubmit({
      content: formData.get('post-comment-input'),
    });

    const $input = event.target.querySelector('input');
    $input.value = '';
  });
}
