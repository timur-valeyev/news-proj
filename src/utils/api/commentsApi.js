import axios1 from "../axios";
import axios from "axios";


export const commentsApi = {
    getAllComments: (id) => axios1.get(`comments?postId=${id}`),
    addNewComment: async (obj) => {
        const json = JSON.stringify(obj);
        const res = await axios.post('http://localhost:8888/comments', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data.data
    }
}

