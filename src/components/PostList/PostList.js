import PostItem from './PostItem';
import classes from './PostList.module.css';
import postItemClasses from './PostItem.module.css';
import skeletonClasses from '../../UI/ImageSkeleton.module.css';

export default function PostList({ $target, props, onClick }) {
  this.props = props;
  this.$element = document.createElement('ul');
  this.$element.className = classes['post-list'];
  $target.appendChild(this.$element);

  this.render = () => {
    if (!this.props) {
      return;
    }

    this.props.forEach((post) => {
      new PostItem({ $target: this.$element, props: post });
    });

    imageLoad(); // 비동기 로드 처리
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');
    const { postId } = $li.dataset;

    if (postId) {
      onClick(postId);
    }
  });

  async function imageLoad() {
    const $placeholders = document.querySelectorAll(
      `.${skeletonClasses['placeholder']}`,
    );
    console.log($placeholders, `.${skeletonClasses['placeholder']}`);

    $placeholders.forEach(($placeholder) => {
      const $img = document.createElement('img');
      $img.src = $placeholder.dataset.src;
      $img.alt = $placeholder.dataset.alt;
      $img.className = postItemClasses['post-list__item-image'];
      console.log($img);

      $img.addEventListener('load', () => {
        setTimeout(() => {
          $placeholder.appendChild($img);
        });
      });
    });
  }
}
