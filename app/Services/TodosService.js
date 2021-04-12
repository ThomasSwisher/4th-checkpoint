import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

// ============== Todos Service
class TodosService {

    // ============= GetTodo ==============
    async getTodos() {
        let res = await sandboxApi.get('thomas/todos')
        // =====  console.log(res.data) ==================
        ProxyState.todos = res.data.map(c => new Todo(c))
    }

    // ============= CreateTodo ==============
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

    // ============= Completed Todo ==============
    // find the todo / flip its completed bool and do put request todos at id
    async completed(id) {
        // step 1: find car
        let todo = ProxyState.todos.find(t => t.id === id)
        // step 2: modify it (this sets the switch to store the listener)
        todo.completed = !todo.completed
        //console.log(todo)

        // step 3: send update to server (need to send the switch results)
        await sandboxApi.put('thomas/todos/' + id, { completed: todo.completed })

        // step 4: trigger the proxystate that a change was made
        ProxyState.todos = ProxyState.todos
    }

    // ============= delete Todo ==============
    async deleteTodo(id) {
        // restful convention for a delete route is '/collectionName/:id' (the ':' indicates a variable value does not need to be added)
        await sandboxApi.delete('thomas/todos/' + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

}



export const todosService = new TodosService();