import PostForm from '../components/PostForm/PostForm.js';
import { readPost, uploadPost } from '../lib/postsApi.js';
import { getRandomPhoto } from '../lib/unsplashApi.js';
import { routeChage } from '../router.js';

export default function PostEditPage({ $target, postId }) {
  this.state = {
    title: '',
    content: '',
    image: '',
  };

  this.setState = async (newState) => {
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

    new PostForm({
      $target,
      props: {
        ...this.state,
        action: 'edit',
      },
      onClick: async (event) => {
        event.target.classList.add('click-block');

        const response = await getRandomPhoto();
        const image = response[0].urls.small;
        this.setState({ image });

        event.target.classList.remove('click-block');
        event.target.parentNode.querySelector('#post-image').src = image;
      },

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
