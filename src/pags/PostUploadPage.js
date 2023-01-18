import PostForm from '../components/PostForm/PostForm';
import { createPost } from '../lib/postsApi';
import { getRandomPhoto } from '../lib/unsplashApi';

export default function PostUploadPage({ $target }) {
  const $page = document.createElement('section');
  $page.className = 'post-upload-section';
  $target.appendChild($page);

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

    console.log(this.state);
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
