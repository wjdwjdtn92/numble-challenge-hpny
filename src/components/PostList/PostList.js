import PostItem from './PostItem';

export default function PostList({ $target, initialState, onClick }) {
  this.state = initialState;
  const $postList = document.createElement('ul');
  $postList.className = 'post-list';
  $target.appendChild($postList);

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    this.state.map((post) => new PostItem({ $target: $postList, props: post }));
  };

  this.render();

  $postList.addEventListener('click', () => {
    const $li = event.target.closest('li');
    const { postId } = $li.dataset;

    if (postId) {
      onClick(postId);
    }
  });
}
