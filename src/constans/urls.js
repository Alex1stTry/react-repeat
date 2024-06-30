const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'


const urls = {
    todos,
    albums,
    comments: {
        base: comments,
        postByCommentId: (id) => `${comments}/${id}/posts`
    }
}

export {
    baseURL,
    urls
}