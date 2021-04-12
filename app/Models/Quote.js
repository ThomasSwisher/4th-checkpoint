export default class Quote {
    constructor({ content, author }) {
        this.quote = content
        this.author = author
        //console.log(content)
    }

    get Template() {

        return /*html*/`
                       <div class="col-12 hover-div quote d-flex justify-content-center">${this.quote}</div>
                       <div class="col-12 hidden-text">${this.author}</div>
                `
    }


}