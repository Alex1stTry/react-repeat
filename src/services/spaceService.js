import {axiosInstance} from "./axios.service";
import {baseURL} from "../constants/urls";

const spaceService = {
    getAll:() => axiosInstance.get(baseURL)
}

export {
    spaceService
}