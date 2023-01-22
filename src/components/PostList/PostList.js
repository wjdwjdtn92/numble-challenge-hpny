import classes from './PostList.module.css';
import postItemStyle from './PostItem.module.css';

import PostItem from './PostItem';
import { imageLoad } from '../../lib/image';

export default function PostList({ $target, props, onClick }) {
  this.props = props;
  this.$element = document.createElement('ul');
  this.$element.className = classes['post-list'];
  $target.appendChild(this.$element);

  this.render = async () => {
    if (!this.props) {
      return;
    }

    this.props.forEach((post) => {
      new PostItem({ $target: this.$element, props: post });
    });

    imageLoad(`${postItemStyle['post-list__item-image']} image-size-110`); // 비동기 로드 처리
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');
    const { postId } = $li.dataset;

    if (postId) {
      onClick(postId);
    }
  });
}
