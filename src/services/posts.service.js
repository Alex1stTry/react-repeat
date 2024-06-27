import {axiosInstance} from "./axios.service";
import {urls} from "../constants/urls";

const postsService = {
    getAll:()=> axiosInstance(urls.posts.base),
    byId:(id)=>axiosInstance(urls.posts.byId(id))
};

export {
    postsService
}
