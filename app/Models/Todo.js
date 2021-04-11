
export default class Todo {
    constructor({ _id, description, completed = false }) {
        this.id = _id
        this.nameTodo = description
        this.completed = completed
        //console.log(this.id)
    }

    get Template() {

        return /*html*/`
        <div> <input class="itemsChecked" name="itemCheckBox" type="checkbox" onclick="app.todosController.completed('${this.id}')"> ${this.nameTodo} <i class="fas fa-backspace ml-2 text-danger on-hoover" onclick="app.todosController.deleteTodo('${this.id}')"></i></div>
                `
    }

}







