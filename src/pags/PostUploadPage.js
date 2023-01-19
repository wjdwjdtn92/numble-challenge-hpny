import PostForm from '../components/PostForm/PostForm';
import { getRandomPhoto } from '../lib/unsplashApi';

export default function PostUploadPage({ $target }) {
  this.$element = document.createElement('section');
  this.$element.className = 'post-upload-section';
  $target.appendChild(this.$element);

  this.state = {
    title: '',
    content: '',
    image: '',
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
  };

  this.render = () => {
    new PostForm({
      $target,
      onClick: async () => {
        const response = await getRandomPhoto();
        this.setState({ image: response[0].urls.small });
        // console.log(response[0].urls.small);
      },
      onSubmit: async (data) => {
        this.setState({ ...data });
        // const response = await createPost(this.state);
        const response = { code: 201 };

        if (response.code === 201) {
          //성공 실패 팝업
        }
      },
    });
  };

  this.render();
}
