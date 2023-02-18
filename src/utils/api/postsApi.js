import axios from '../axios'


export const postsApi =  {
    getAllPosts: () => axios.get('posts')
}