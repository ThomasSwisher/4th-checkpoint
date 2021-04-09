import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

// NOTE Create!!
class TodosService {
    async getTodos() {
        let res = await sandboxApi.get('thomas/todos')

        // NOTE =====  console.log(res.data) ==================

        ProxyState.todos = res.data.map(c => new Todo(c))
    }
    // NOTE Post========
    async createTodo(newTodo) {
        // NOTE post creates data in the server, the first argument to extend the url the second is the data to send
        let res = await sandboxApi.post('thomas/todos', newTodo)
        console.log(res.data)
        res.data.id = res.data._id
        // NOTE This is grabbing the new house data then declaring the ProxyState.houses = to the 
        //new "house" then replacing the old ProxyState with combination of old houses and the new one.
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    // async deleteHouse(id) {
    //     // restful convention for a delete route is '/collectionName/:id' (the ':' indicates a variable value does not need to be added)
    //     await api.delete('houses/' + id)
    //     ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
    // }

}



export const todosService = new TodosService();