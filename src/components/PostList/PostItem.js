import ImageSkeleton from '../../UI/ImageSkeleton';
import classes from './PostItem.module.css';

export default function PostItem({ $target, props }) {
  this.props = props;
  this.$element = document.createElement('li');
  this.$element.className = classes['post-list__item'];
  $target.appendChild(this.$element);

  this.render = () => {
    if (!this.props) {
      return;
    }

    const { postId, title, createdAt, content, image } = this.props;
    const date = new Date(createdAt).toLocaleDateString();
    this.$element.dataset.postId = postId;
    // src=${image}
    new ImageSkeleton({
      $target: this.$element,
      attributes: {
        className: classes['image-size'],
      },
      dataSrc: image,
      dataAlt: title,
    });

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <div class="${classes['post-list__item-container']}"> 
        <h3 class=${classes['post-list__item-title']}>${title}</h3>
        <p class = ${classes['post-list__item-content']}>${content}</p>
      </div>
      <div class=${classes['post-list__item-date']}>${date}</div>
    `,
    );
  };
  // <img class=${classes['post-list__item-image']} loading="lazy"/>
  this.render();
}
