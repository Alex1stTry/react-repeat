const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users:{
        base:users,
        byId:(id)=>`${users}/${id}`
    },
    posts:{
        base:posts,
        byUserId:(id)=>`${users}/${id}/${posts}`,
        byId:(id)=>`${posts}/${id}`
    },
    comments:{
        base:comments
    }

}

export {
    baseURL,
    urls
}