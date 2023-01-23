import Button from '../UI/Button';
import classes from './PostForm.module.css';
import ImageNotFound from '../../assets/images/image_not_found.png';
import ModalContent from '../Modal/ModalContent';

export default function PostForm({ $target, props, onClick, onSubmit }) {
  this.props = props;
  this.$element = document.createElement('Form');
  this.$element.className = classes['post-form'];
  $target.appendChild(this.$element);

  const { title, content, image, action } = this.props;
  const addButtonText = image.length === 0 ? '추가하기' : '변경하기';
  const submitButtonText = action === 'create' ? '등록' : '변경';
  const src = image.length === 0 ? ImageNotFound : image;

  this.render = async () => {
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
        textContent: `${submitButtonText}하기`,
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

    window.modal.classList.add('modal-show');
    window.modal.innerHTML = '';
    new ModalContent({
      $target: window.modal,
      props: {
        title: `게시물 ${submitButtonText}`,
        content: `게시물을 정말 ${submitButtonText}하시겠습니까?`,
      },
      onConfirm: async () => {
        onSubmit({
          title: formData.get('title'),
          content: formData.get('content'),
        });
        window.modal.classList.remove('modal-show');
      },
      onCancel: () => {
        window.modal.classList.remove('modal-show');
      },
    });
  };

  this.handleClick = async (event) => {
    event.preventDefault();

    onClick(event);
  };

  this.render();
}
