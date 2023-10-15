export class Message{
    author: string
    message: string[]
    id: string
    dateCreated: Date

    constructor(id: string, author: string, message: string[], dateCreated: Date){
        this.id = id
        this.author = author
        this.message = message
        this.dateCreated = dateCreated
    }
}