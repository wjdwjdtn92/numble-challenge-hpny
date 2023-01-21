import PostList from '../components/PostList/PostList.js';
import { readPostList } from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostListPage({ $target }) {
  this.state = [];

  this.setState = (newState) => {
    this.state = [...newState];
    this.render();
  };

  this.render = () => {
    $target.innerHTML = '';

    new PostList({
      $target,
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
