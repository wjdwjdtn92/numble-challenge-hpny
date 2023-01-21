import PostForm from '../components/PostForm/PostForm';
import { createPost } from '../lib/postsApi';
import { getRandomPhoto } from '../lib/unsplashApi';

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
      onClick: async () => {
        const response = await getRandomPhoto();
        this.setState({ image: response[0].urls.small });
      },
      onSubmit: async (data) => {
        this.setState({ ...data });
        const response = await createPost(this.state);

        if (response.code === 201) {
          //성공 실패 팝업
          console.log('성공');
        }
      },
    });
  };

  this.render();
}
