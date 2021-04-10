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
        //console.log(res.data)
        res.data.id = res.data._id
        // NOTE This is grabbing the new todo data then declaring the ProxyState.todos = to the
        //new "todo" then replacing the old ProxyState with combination of old todos and the new one.
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }



    // find the todo / flip its completed bool and do put request todos at id
    async completed(id) {
        let todo = ProxyState.todos.find(t => t.id === id)
        // step 2: modify it
        todo.completed = !todo.completed
        console.log(todo)
    }

    async deleteTodo(id) {
        // restful convention for a delete route is '/collectionName/:id' (the ':' indicates a variable value does not need to be added)
        await sandboxApi.deleteTodo('todos/' + id)
        ProxyState.todos = ProxyState.todos.filter(todo => todo.id != id)
    }

}



export const todosService = new TodosService();