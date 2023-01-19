export default function PostCommentForm({ $target, onSubmit }) {
  const $postCommentForm = document.createElement('form');
  $postCommentForm.className = 'post-comment-form';
  $target.appendChild($postCommentForm);

  this.render = () => {
    $postCommentForm.innerHTML = '';

    $postCommentForm.insertAdjacentHTML(
      'beforeend',
      `
      <input 
        type="text" 
        name="post-comment-input"
        placeholder="댓글 내용을 입력해주세요"
      />
      <button aria-label="댓글 작성하기 버튼">
        입력
      </button>
      `,
    );
  };

  this.render();

  $postCommentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData($postCommentForm);

    for (const value of formData.values()) {
      if (value.trim().length === 0) {
        return;
      }
    }
    console.log(formData.get('post-comment-input'));

    onSubmit({
      content: formData.get('post-comment-input'),
    });
  });
}
