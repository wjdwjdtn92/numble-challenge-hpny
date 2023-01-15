import dumy_data from '../assets/data/dumy.js';
import PostList from '../components/PostList/PostList.js';
import PostNewButton from '../components/PostList/PostNewButton.js';

export default function PostListPage({ $target }) {
  console.log(dumy_data);
  const $page = document.createElement('section');
  $page.className = 'post-list-section';
  $target.appendChild($page);

  this.render = () => {
    new PostList({ $target: $page, initialState: dumy_data });
    new PostNewButton({ $target });
  };

  this.render();
}
