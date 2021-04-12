export default class Todo {
    constructor({ _id, description, completed }) {
        this.id = _id
        this.nameTodo = description
        this.completed = completed
        //console.log(this.completed)

    }

    get Template() {

        return /*html*/`
        <div> <input class="itemsChecked" name="itemCheckBox" ${this.completed ? 'checked' : ""} type="checkbox" onclick="app.todosController.completed('${this.id}')"> ${this.nameTodo} <i class="fas fa-backspace ml-2 text-danger on-hoover" onclick="app.todosController.deleteTodo('${this.id}')"></i></div>
                `
    }

}







