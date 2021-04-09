import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _draw() {
    let todos = ProxyState.todos
    let template = ''
    todos.forEach(t => {
        template += todo.Template
    })
    document.getElementById('todos').innerHTML = template
}

// NOTE ============= TODO =====================
//Public
export default class TodosController {
    constructor() {
        ProxyState.on("todos", _draw);
        // NOTE get todos on draw
        this.getTodos()
    }


    // NOTE ============= TODO =====================
    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }


    async createTodo() {
        try {
            // NOTE prevent window from opening on form submission.
            window.event.preventDefault()
            const form = window.event.target
            let newTodo = {
                description: form.todoName.value
            }
            await todosService.createTodo(newTodo)
            form.reset()
        } catch (error) {
            console.error(error)
        }

    }

    // NOTE ==========TODO=============
    deleteTodo(id) {
        // try {
        //     housesService.deleteHouse(id)
        // } catch (error) {
        //     console.error(error)
        // }
    }
}
