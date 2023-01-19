import classes from './PostDetail.module.css';

export default function PostDetail({ $target, initialState, onEdit }) {
  this.state = initialState;
  this.$element = document.createElement('article');
  this.$element.className = classes['post-detail'];
  $target.appendChild(this.$element);

  this.setState = (newState) => {
    console.log('123', this.state, newState);

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

  this.render = () => {
    if (JSON.stringify(this.state) === '{}') {
      return;
    }
    this.$element.innerHTML = '';

    const { postId, title, content, image, createdAt } = this.state;
    const date = new Date(createdAt).toLocaleDateString();

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <div class=${classes['post-detail__info']}>
        <img
          src="${image}" 
          alt="${title}" 
          class=${classes['post-detail__info-img']}
          loading="lazy"
        />
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
      onEdit(this.state.postId);
      return;
    }
  });
}
