import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const postsService = {
    getByUserId:(id)=>apiService(urls.posts.byUserId(id)),
    getById:(id) => apiService.get(urls.posts.byId(id))
}

export {
    postsService
}