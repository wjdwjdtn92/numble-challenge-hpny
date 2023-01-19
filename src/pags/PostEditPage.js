import PostEditForm from '../components/PostEditForm/PostEditForm.js';
import { readPost, uploadPost } from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostEditPage({ $target, postId }) {
  this.state = {};
  const $page = document.createElement('section');
  $page.className = 'post-edit-section';
  $target.appendChild($page);
  console.log('asdasd');

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = {
      ...this.state,
      ...newState,
    };
  };
  console.log('asdasd');

  this.render = async () => {
    const data = await readPost(postId);
    console.log(data);
    if (!data) {
      return;
    }

    console.log(data.post, 'data');

    this.setState(data.post);

    new PostEditForm({
      $target: $page,
      props: this.state,
      onSubmit: async (data) => {
        const response = await uploadPost(this.state.postId, data);
        console.log(response, 'response');
        if (!response) {
          return;
        }

        routeChage(`/post/${postId}`);
      },
    });
  };

  this.render();
}
