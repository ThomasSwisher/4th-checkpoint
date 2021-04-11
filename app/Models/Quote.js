export default class Quote {
    constructor({ content, author }) {
        this.quote = content
        this.author = author
        //console.log(this.quote)
    }

    get Template() {

        return /*html*/`
                       <div class="col-12">${this.quote}</div>
                       <div class="col-12">${this.author}</div>
                `
    }


}