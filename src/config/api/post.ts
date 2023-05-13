import { AxiosInstance, AxiosRequestConfig } from "axios";

class Post {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllPosts<T>() {
    return this.client.get<T>("/schools");
  }

  getSinglePost<T>(postId: string) {
    return this.client.get<T>(`/posts/${postId}`);
  }

  createPost<T, P>(body: P) {
    return this.client.post<T>("/posts", body);
  }

  updatePost<T, P>(postId: string, body: P) {
    return this.client.put<T>(`/posts/${postId}`, body);
  }

  deletePost(postId: string) {
    return this.client.delete(`/posts/${postId}`);
  }
}

export default Post;
