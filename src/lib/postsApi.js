import { request } from './api';

export const API_ENDPOINT = 'http://43.201.103.199';

export async function readPostList() {
  const res = await request(`${API_ENDPOINT}/posts`);

  if (res.code !== 200) {
    return [];
  }

  console.log(res.data.posts);
  return res.data.posts;
}

export async function createPost(data) {
  console.log(data);
  return await request(`${API_ENDPOINT}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function uploadPost(postId, data) {
  return await request(`${API_ENDPOINT}/post/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function deletePost(postId) {
  return await request(`${API_ENDPOINT}/post/${postId}`, {
    method: 'DELETE',
  });
}

export async function createComment(postId, data) {
  return await request(`${API_ENDPOINT}/comment/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function deleteComment(postId) {
  return await request(`${API_ENDPOINT}/comment/${postId}`, {
    method: 'DELETE',
  });
}
