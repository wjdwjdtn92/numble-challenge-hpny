import PostCommentForm from '../components/PostComments/PostCommentForm.js';
import PostComments from '../components/PostComments/PostComments.js';
import PostDetail from '../components/PostDetail/PostDetail.js';

import {
  createComment,
  deleteComment,
  deletePost,
  readPost,
} from '../lib/postsApi.js';
import { routeChage } from '../router.js';

export default function PostDetailPage({ $target, postId }) {
  this.state = {
    post: {},
    comments: [],
  };

  this.setState = async (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    postDetail.setState(this.state.post);
    postComments.setState(this.state.comments);
  };

  const postDetail = new PostDetail({
    $target,
    initialState: this.state.post,
    onEdit: async (postId) => {
      routeChage(`/edit/${postId}`);
    },
    onDelete: async (postId) => {
      const response = await deletePost(postId);

      if (response.code !== 200) {
        console.log('error');
        return;
      }

      this.render();
    },
  });

  const postComments = new PostComments({
    $target,
    initialState: this.state.comments,
    onDelete: async (commentId) => {
      const response = await deleteComment(commentId);

      if (response.code !== 200) {
        console.log('error');
        return;
      }

      this.render();
    },
  });

  new PostCommentForm({
    $target,
    onSubmit: async (data) => {
      const response = await createComment(postId, data);

      if (response.code !== 201) {
        console.log('error');
        return;
      }

      this.render();
    },
  });

  this.render = async () => {
    this.setState(await readPost(postId));
  };

  this.render();
}
