import axios from '../axios'


export const postsApi =  {
    getAllPosts: () => axios.get('posts'),
    getFullPost: (id) => axios.get(`posts?id=${id}`)
}