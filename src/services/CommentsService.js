import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentsService ={
    getAll:() => apiService.get(urls.comments.base),
}

export {
    commentsService
}