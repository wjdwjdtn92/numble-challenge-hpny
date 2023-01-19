import { request } from './api';

export const API_ENDPOINT = 'api';

export async function readPostList() {
  const res = await request(`${API_ENDPOINT}/posts`);

  if (res.code !== 200) {
    return [];
  }

  return res.data.posts;
}

export async function readPost(postId) {
  const res = await request(`${API_ENDPOINT}/post/${postId}`);

  if (!res || !res.success) {
    return;
  }

  return res.data;
}

export async function createPost(data) {
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
