export default class Temp {
    constructor({ temp }) {
        this.temp = temp
    }

    get Template() {

        return `
                    <div class="col">
                ${this.temp}
            </div>
                `

    }

}