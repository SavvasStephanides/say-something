import { Message } from "./message";
import * as fs from 'fs';
import path from "path"

export class MessageService{
    private messagesDirectory: string = path.join(path.resolve(), "app/messages")

    getAllMessages(): Message[]{
        const messageIds: string[] = fs.readdirSync(this.messagesDirectory)

        let messages: Message[] = messageIds.map(messageId => {
            return this.getMessageById(messageId)
        })
        
        messages = messages.sort((a,b) => b.dateCreated < a.dateCreated ? -1 : 1)
        
        return messages
    }

    getMessageById(id: string): Message{
        let file = fs.readFileSync(`${this.messagesDirectory}/${id}`).toString()

        let splitMessage: string[] = file.split("\n")

        let author: string = splitMessage[0]
        author = author.replace("By: ", "")

        splitMessage.shift()

        splitMessage = splitMessage.filter(line => line !== '')

        let dateCreated: Date = fs.statSync(`${this.messagesDirectory}/${id}`).mtime

        return new Message(id, author, splitMessage, dateCreated)
    }

    getLatestMessage(): Message{
        let allMessages: Message[] = this.getAllMessages()

        return allMessages[0]
    }
}