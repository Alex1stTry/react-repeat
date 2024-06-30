import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const albumsService = {
    getAll:()=> apiService.get(urls.albums)
}
export {
    albumsService
}