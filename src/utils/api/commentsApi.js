import axios from '../axios'


export const commentsApi = {
    getAllComments: (id) => axios.get(`comments?postId=${id}`),
    addNewComment: async (obj) => {
        const json = JSON.stringify(obj)
        const res = await axios.post('comments', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data.data
    },
    updateComment: async (obj) => {
        const res = await axios.put(`comments/${obj.id}`, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data.data
    },
    deleteComment: (id) => axios.delete(`comments/${id}`)
}
