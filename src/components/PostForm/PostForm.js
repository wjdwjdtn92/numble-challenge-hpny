import Button from '../../UI/Button';
import classes from './PostForm.module.css';
import ImageNotFound from '../../assets/images/image_not_found.png';

export default function PostForm({ $target, props, onClick, onSubmit }) {
  this.props = props;
  this.$element = document.createElement('Form');
  this.$element.className = classes['post-form'];
  $target.appendChild(this.$element);

  this.render = async () => {
    const { title, content, image, action } = this.props;
    const addButtonText = image.length === 0 ? '추가하기' : '변경하기';
    const submitButtonText = action === 'create' ? '등록하기' : '변경하기';
    const src = image.length === 0 ? ImageNotFound : image;

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <img
        class="image-size-320 ${classes['post-form__image']}"
        src="${src}"
        id="post-image" 
      />
      `,
    );

    new Button({
      $target: this.$element,
      attributes: {
        className: classes['post-form__button'],
        textContent: `랜덤 이미지 ${addButtonText}`,
        ariaLabel: `랜덤 이미지 ${addButtonText} 버튼`,
        type: 'button',
        onclick: this.handleClick,
      },
    });

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <fieldset>
        <label class=${classes['post-form__label']}>제목</label>
        <input
          class=${classes['post-form__input-title']}
          name="title"
          id="post-upload-form__input-title"
          placeholder="글 제목을 입력해주세요"
          value="${title}"
          type="text"
          required
        >
      </fieldset>
      
      <fieldset>
        <label>내용</label>
        <textarea
          class=${classes['post-form__input-content']}
          name="content"
          id="post-upload-form__input-content"
          placeholder="글 내용을 입력해주세요"
          required>${content}</textarea>
      </fieldset>
        `,
    );

    new Button({
      $target: this.$element,
      attributes: {
        className: classes['post-form__button'],
        textContent: submitButtonText,
        ariaLabel: `${submitButtonText} 버튼`,
        type: 'submit',
        onclick: this.handleSubmit,
      },
    });
  };

  this.handleSubmit = async (event) => {
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

    onClick(event);
  };

  this.render();
}
