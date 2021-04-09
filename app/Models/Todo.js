
export default class Todo {
    constructor(_id, description, todoCompleted = false) {
        this.id = _id
        this.nameTodo = description
        this.todoCompleted = todoCompleted
    }

    get Template() {

        return /*html*/`
<div> <input class="itemsChecked" name="itemCheckBox" type="checkbox" onclick="app.todosController.completedTask('${this.id}')"> ${this.name} <i class="fas fa-backspace ml-2 text-danger on-hoover" onclick="app.todosController.deleteTodo('${this.id}')"></i></div>
        `
    }

}







