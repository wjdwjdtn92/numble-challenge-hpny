import PostList from '../components/PostList/PostList.js';
import PostNewButton from '../components/PostList/PostNewButton.js';
import { readPostList } from '../lib/postsApi.js';
import { routeChage } from '../router.js';
import classes from './PostListPage.module.css';

export default function PostListPage({ $target }) {
  this.state = [];
  this.$element = document.createElement('section');
  this.$element.className = classes['post-list-section'];
  $target.appendChild(this.$element);

  this.setState = (newState) => {
    this.state = [...newState];
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = '';

    new PostList({
      $target: this.$element,
      props: this.state,
      onClick: (postId) => {
        routeChage(`/post/${postId}`);
      },
    });
  };

  this.render();

  (this.getPosts = async () => {
    this.setState(await readPostList());
  })();
}
