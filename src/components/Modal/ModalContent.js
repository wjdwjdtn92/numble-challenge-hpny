import style from './ModalContent.module.css';

export default function ModalContent({ $target, props, onCancel, onConfirm }) {
  this.props = props;
  this.$element = document.createElement('div');
  this.$element.className = style['modal-content'];
  $target.appendChild(this.$element);

  this.setsState = async (newState) => {
    this.state = newState;

    this.render();
  };

  this.render = async () => {
    const { title, content } = this.props;

    this.$element.innerHTML = `
    <div class=${style['modal-header']}>
      <h2 class=${style['modal-title']}>${title}</h2>
      <button
        type="button"
        class=${style['cancel-button']} 
        data-action="close"
        aria-label="닫기 버튼"
      >
        &times
      </button>
    </div>
    <div class=${style['modal-body']}>
       <p>${content}</p>
    </div>
    <div class=${style['modal-footer']}>
      <button
        class="${style['modal-button']}" 
        type="button" 
        data-action="confirm"
        aria-label="확인하기 버튼"
      >
        확인
      </button>
      <button
        class="${style['modal-button']}" 
        type="button" 
        data-action="close"
        aria-label="취소하기 버튼"
      >
        취소
      </button>
    </div>
    `;
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $button = event.target.closest('button');
    const action = $button.dataset.action;

    if (!$button) {
      return;
    }

    if (action === 'confirm') {
      onConfirm();
      this.$element.classList.remove = 'show-modal';
    }

    if (action === 'close') {
      onCancel();
      this.$element.classList.remove = 'show-modal';
    }
  });
}
