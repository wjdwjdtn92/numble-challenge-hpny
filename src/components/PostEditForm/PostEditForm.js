import Button from '../../UI/Button';

export default function PostEditForm({ $target, props, onSubmit }) {
  this.$element = document.createElement('Form');
  this.$element.className = 'post-edit-form';
  $target.appendChild(this.$element);
  console.log(props, 'props');

  this.render = () => {
    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <img src="${props.image}" />
      <label>제목</label>
       <input
        class="title"
        name="title"
        id="post-upload-form__input-title"
        placeholder="글 제목을 입력해주세요"
        type="text"
        value="${props.title}"
        required>
      </input>
      <label>내용</label>
      <textarea
        class="content"
        name="content"
        id="post-upload-form__input-content"
        placeholder="글 내용을 입력해주세요"
        required
        >${props.content}</textarea>`,
    );

    new Button({
      $target: this.$element,
      attributes: {
        className: 'button',
        textContent: '수정하기',
        ariaLabel: '수정하기 버튼',
        type: 'submit',
        onclick: (event) => {
          event.preventDefault();

          const formData = new FormData(this.$element);

          for (const value of formData.values()) {
            if (value.trim().length === 0) {
              return;
            }
          }

          onSubmit({
            title: formData.get('title'),
            content: formData.get('content'),
          });
        },
      },
    });
  };

  this.render();
}
