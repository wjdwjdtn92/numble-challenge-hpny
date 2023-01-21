import PostList from '../components/PostList/PostList.js';
import { readPostList } from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostListPage({ $target }) {
  this.state = [];

  this.render = async () => {
    $target.innerHTML = '';

    new PostList({
      $target,
      props: await readPostList(),
      onClick: (postId) => {
        routeChage(`/post/${postId}`);
      },
    });
  };

  this.render();
}
