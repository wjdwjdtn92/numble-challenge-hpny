import Button from '../../UI/Button';

export default function UploadPostForm({ $target, onClick, onSubmit }) {
  const $form = document.createElement('Form');
  $form.className = 'post-upload-form';
  $target.appendChild($form);

  this.setState = (newState) => {
    // deep check
    if (newState === this.state) {
      return;
    }

    this.state = newState;
    this.render();
  };

  this.render = () => {
    new Button({
      $target: $form,
      attributes: {
        className: 'button',
        textContent: '랜덤 이미지 추가하기',
        ariaLabel: '랜덤 이미지 추가 버튼',
        type: 'button',
        onclick: onClick,
      },
    });

    $form.insertAdjacentHTML(
      'beforeend',
      `<label>제목</label>
       <input
        class="title"
        name="title"
        id="post-upload-form__input-title"
        placeholder="글 제목을 입력해주세요"
        type="text"
        required>
      <label>내용</label>
      <textarea
        class="content"
        name="content"
        id="post-upload-form__input-content"
        placeholder="글 내용을 입력해주세요"
        required
      ></textarea>`,
    );

    new Button({
      $target: $form,
      attributes: {
        className: 'button',
        textContent: '등록하기',
        ariaLabel: '등록하기 버튼',
        type: 'submit',
        onclick: (event) => {
          event.preventDefault();

          const formData = new FormData($form);

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
