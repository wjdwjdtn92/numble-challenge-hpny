import PostForm from '../components/PostForm/PostForm';
import { createPost } from '../lib/postsApi';
import { getRandomPhoto } from '../lib/unsplashApi';
import { routeChage } from '../router';

export default function PostUploadPage({ $target }) {
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
    new PostForm({
      $target,
      props: { ...this.state, action: 'create' },
      onClick: async (event) => {
        event.target.classList.add('click-block');

        const response = await getRandomPhoto();
        const image = response[0].urls?.small;
        this.setState({ image });

        event.target.classList.remove('click-block');
        event.target.parentNode.querySelector('#post-image').src = image;
        event.target.textContent = '이미지 변경하기';
      },
      onSubmit: async (data) => {
        this.setState({ ...data });
        const response = await createPost(this.state);

        if (response?.code === 201) {
          routeChage('/');
        } else if (response?.code === 400) {
          console.log('bad request error');
        } else {
          console.log('server Error');
        }
      },
    });
  };

  this.render();
}
