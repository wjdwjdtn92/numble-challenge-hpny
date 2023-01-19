import Header from './components/layout/Header.js';
import PostDetailPage from './pags/PostDetailPage.js';
import PostEditPage from './pags/postEditPage.js';
import PostListPage from './pags/PostListPage.js';
import PostUploadPage from './pags/PostUploadPage.js';
import { router } from './router.js';
import classes from './App.module.css';

export default function App({ $target }) {
  const header = new Header({ $target, initialState: false });
  const $main = document.createElement('main');
  $main.className = classes.main;
  $target.appendChild($main);

  this.route = () => {
    const { pathname } = location;
    $main.innerHTML = '';

    if (pathname === '/') {
      header.setState(false);
      new PostListPage({ $target: $main });
      return;
    }

    if (pathname.includes('/post/')) {
      header.setState(true);
      new PostDetailPage({
        $target: $main,
        postId: pathname.split('/post/')[1],
      });
      return;
    }

    if (pathname.includes('/edit/')) {
      header.setState(true);
      console.log('edit');
      new PostEditPage({
        $target: $main,
        postId: pathname.split('/edit/')[1],
      });
      return;
    }

    if (pathname.includes('/upload')) {
      header.setState(true);
      new PostUploadPage({ $target: $main });
      return;
    }

    $target.innerHTML = 'page not nound';
  };

  router(this.route);
  window.addEventListener('popstate', this.route);

  this.route();
}
