import axios from 'axios';

export default class PostService {
  static async fetchPostAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  }

  static async fetchPostItem(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  }
};