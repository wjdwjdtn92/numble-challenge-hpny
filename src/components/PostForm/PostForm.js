import Button from '../../UI/Button';
import classes from './PostForm.module.css';

export default function UploadPostForm({ $target, onClick, onSubmit }) {
  this.$element = document.createElement('Form');
  this.$element.className = classes['post-form'];
  $target.appendChild(this.$element);

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
      $target: this.$element,
      attributes: {
        className: classes['post-form__button'],
        textContent: '랜덤 이미지 추가하기',
        ariaLabel: '랜덤 이미지 추가 버튼',
        type: 'button',
        onclick: this.handleClick,
      },
    });

    this.$element.insertAdjacentHTML(
      'beforeend',
      `<label class=${classes['post-form__label']}>제목</label>
       <input
        class=${classes['post-form__iput-title']}
        name="title"
        id="post-upload-form__input-title"
        placeholder="글 제목을 입력해주세요"
        type="text"
        required>
      <label>내용</label>
      <textarea
        class=${classes['post-form__iput-content']}
        name="content"
        id="post-upload-form__input-content"
        placeholder="글 내용을 입력해주세요"
        required></textarea>`,
    );

    new Button({
      $target: this.$element,
      attributes: {
        className: classes['click-block'],
        textContent: '등록하기',
        ariaLabel: '등록하기 버튼',
        type: 'submit',
        onclick: this.handleSubmit,
      },
    });
  };

  this.handleSubmit = (event) => {
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
  };

  this.handleClick = async (event) => {
    event.preventDefault();
    await onClick();

    event.target.classList.add(classes['click-block']);
    event.target.onclick = null;
  };

  this.$element.addEventListener('change', (event) => {
    const $input = event.target.closest('input');

    if (!$input) {
      return;
    }
  });

  this.render();
}
