import { imageLoad } from '../../lib/image';
import ModalContent from '../Modal/ModalContent';
import classes from './PostDetail.module.css';

export default function PostDetail({
  $target,
  initialState,
  onEdit,
  onDelete,
}) {
  this.state = initialState;
  this.$element = document.createElement('article');
  this.$element.className = classes['post-detail'];
  $target.appendChild(this.$element);

  this.setState = async (newState) => {
    for (const key in newState) {
      if (this.state[key] !== newState[key]) {
        this.state = {
          ...this.state,
          ...newState,
        };

        this.render();
        return;
      }
    }
  };

  this.render = async () => {
    if (JSON.stringify(this.state) === '{}') {
      return;
    }
    this.$element.innerHTML = '';

    const { title, content, image, createdAt } = this.state;
    const date = new Date(createdAt).toLocaleDateString();

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <div class=${classes['post-detail__info']}>
        <div 
          class="placeholder image-size-320"
          data-src=${image}
          data-alt=${title}      
        ></div>
        <div class=${classes['post-detail__info-desc']}>
          <div class=${classes['post-detail__info-header']}>
            <h2 class=${classes['post-detail__info-title']}>${title}</h2>
            <span class=${classes['post-detail__info-date']}>
              ${date.slice(0, -1)}
            </span>
          </div>
          <p class=${classes['post-detail__info-content']}>${content}</p>
        </div>
      </div>
      <div class=${classes['post-detail__button-container']}>
        <button 
          id="post-edit-button"
          class=${classes['post-detail__button']}
        >수정</button>
        <button 
          id="post-delete-button"
          class=${classes['post-detail__button']}
        >삭제</button>
      </div>
      <hr class=${classes['hr']}>
      `,
    );

    imageLoad(`${classes['post-detail__info-img']} image-size-320 `);
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $button = event.target.closest('button');

    if (!$button) {
      return;
    }

    if ($button.id === 'post-edit-button') {
      onEdit(this.state.postId);
      return;
    }

    if ($button.id === 'post-delete-button') {
      window.modal.classList.add('modal-show');
      window.modal.innerHTML = '';
      new ModalContent({
        $target: window.modal,
        props: {
          title: `게시물 삭제`,
          content: `게시물을 정말로 삭제하시겠습니까?`,
        },
        onConfirm: async () => {
          onDelete(this.state.postId);
          window.modal.classList.remove('modal-show');
        },
        onCancel: () => {
          window.modal.classList.remove('modal-show');
        },
      });

      return;
    }
  });
}
