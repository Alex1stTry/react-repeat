const baseURL = 'https://rickandmortyapi.com/api'


const episodes = '/episode'
const character = '/character'

const urls = {
    episodes,
    character:{
        base:character,
        byId:(id)=> `${character}/${id}`
    }
}

export {
    baseURL,
    urls
}