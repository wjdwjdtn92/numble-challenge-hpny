import Header from './components/layout/Header.js';
import Main from './components/layout/Main.js';
import Section from './components/layout/section.js';

import PostEditPage from './pags/postEditPage.js';
import PostListPage from './pags/PostListPage.js';
import PostDetailPage from './pags/PostDetailPage.js';
import PostUploadPage from './pags/PostUploadPage.js';

import { router } from './router.js';
import classes from './App.module.css';

export default function App({ $target }) {
  this.$element = document.createElement('div');
  this.$element.className = classes.wrapper;
  $target.appendChild(this.$element);

  const header = new Header({ $target: this.$element, initialState: false });
  const main = new Main({ $target: this.$element });
  const section = new Section({ $target: main.$element });

  this.route = () => {
    const { pathname } = location;
    section.$element.innerHTML = '';

    if (pathname === '/') {
      header.setState(false);
      new PostListPage({ $target: section.$element });
      return;
    }

    if (pathname.includes('/post/')) {
      header.setState(true);
      new PostDetailPage({
        $target: section.$element,
        postId: pathname.split('/post/')[1],
      });
      return;
    }

    if (pathname.includes('/edit/')) {
      header.setState(true);
      new PostEditPage({
        $target: section.$element,
        postId: pathname.split('/edit/')[1],
      });
      return;
    }

    if (pathname.includes('/upload')) {
      header.setState(true);
      new PostUploadPage({ $target: section.$element });
      return;
    }

    section.innerHTML = 'page not nound';
  };

  router(this.route);
  window.addEventListener('popstate', this.route);

  this.route();
}
