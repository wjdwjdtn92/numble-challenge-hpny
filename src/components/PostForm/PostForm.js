import Component from '../../lib/Component';
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
      $children: '랜덤 이미지 추가하기',
      attributes: {
        className: 'button',
        ariaLabel: '랜덤 이미지 추가 버튼',
        type: 'button',
      },
      onClick: onClick,
    });

    new Component({
      $target: $form,
      tag: 'label',
      attributes: {
        for: 'post-upload-form__input',
      },
      $children: '제목',
    });

    new Component({
      $target: $form,
      tag: 'input',
      attributes: {
        className: 'title',
        name: 'title',
        id: 'post-upload-form__input-title',
        placeholder: '글 제목을 입력해주세요',
        type: 'text',
        required: true,
      },
    });

    new Component({
      $target: $form,
      tag: 'label',
      attributes: {
        for: 'post-upload-form__input-content',
      },
      $children: '내용',
    });

    new Component({
      $target: $form,
      tag: 'textarea',
      attributes: {
        className: 'content',
        name: 'content',
        id: 'post-upload-form__input-content',
        placeholder: '글 내용을 입력해주세요',
        required: true,
      },
    });

    new Button({
      $target: $form,
      $children: '등록하기',
      attributes: {
        className: 'button',
        ariaLabel: '등록하기 버튼',
        type: 'submit',
      },
      onClick: (event) => {
        event.preventDefault();

        console.log($form);
        const formData = new FormData($form);

        for (const value of formData.values()) {
          if (value.trim().length === 0) {
            return;
          }
        }
        // console.log(formData.get('title'));
        onSubmit({
          title: formData.get('title'),
          content: formData.get('content'),
        });
      },
    });
  };

  this.render();
}
