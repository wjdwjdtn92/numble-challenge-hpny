import PostEditForm from '../components/PostEditForm/PostEditForm.js';
import { readPost, uploadPost } from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostEditPage({ $target, postId }) {
  this.state = {};

  this.setState = (newState) => {
    if (newState === this.state) {
      return;
    }

    this.state = {
      ...this.state,
      ...newState,
    };
  };

  this.render = async () => {
    const data = await readPost(postId);

    if (!data) {
      return;
    }

    this.setState(data.post);

    new PostEditForm({
      $target,
      props: this.state,
      onSubmit: async (data) => {
        const response = await uploadPost(this.state.postId, data);

        if (!response) {
          return;
        }

        routeChage(`/post/${postId}`);
      },
    });
  };

  this.render();
}
