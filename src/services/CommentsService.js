import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentsService ={
    getAll:() => apiService.get(urls.comments.base),
    getPostByCommentId:(id) => apiService.get(urls.comments.postByCommentId(id))
}

export {
    commentsService
}