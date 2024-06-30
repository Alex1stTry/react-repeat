import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todosService
}