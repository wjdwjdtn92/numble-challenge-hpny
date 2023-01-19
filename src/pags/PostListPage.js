// import dumy_data from '../assets/data/dumy.js';
import PostList from '../components/PostList/PostList.js';
import PostNewButton from '../components/PostList/PostNewButton.js';
import { readPostList } from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostListPage({ $target }) {
  this.state = [];
  const $page = document.createElement('section');
  $page.className = 'post-list-section';
  $target.appendChild($page);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.getPosts = async () => {
    const data = await readPostList();
    // const data = dumy_data;

    this.setState(data);
  };

  const postList = new PostList({
    $target: $page,
    initialState: this.state,
    onClick: (postId) => {
      routeChage(`/post/${postId}`);
    },
  });

  new PostNewButton({
    $target,
    onClick: () => {
      routeChage(`/upload`);
    },
  });

  this.render = () => {
    // new PostList({ $target: $page, initialState: this.state });
    // new PostNewButton({ $target });
    postList.setState(this.state);
  };

  this.render();

  this.getPosts();
}
