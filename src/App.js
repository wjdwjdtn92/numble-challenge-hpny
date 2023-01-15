import Header from './components/layout/Header.js';
import PostDetailPage from './pags/PostDetailPage.js';
import PostListPage from './pags/PostListPage.js';
import PostUploadPage from './pags/PostUploadPage.js';

export default function App({ $target }) {
  new Header({ $target });
  const $main = document.createElement('main');
  $main.className = 'main';
  $target.appendChild($main);

  this.route = () => {
    const { pathname } = location;
    $main.innerHTML = '';

    if (pathname === '/') {
      new PostListPage({ $target: $main });
      return;
    }

    if (pathname.includes('/post/')) {
      new PostDetailPage({ $target: $main });
      return;
    }

    if (pathname.includes('/upload')) {
      new PostUploadPage({ $target: $main });
      return;
    }
  };

  this.route();
}
