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
        let file = fs.readFileSync(`${this.messagesDirectory}/${id}`, 'utf-8')
        let author = file.split("\n")[0].replace("By: ", "")
        let message = file.split("\n")[2]
        let dateCreated: Date = fs.statSync(`${this.messagesDirectory}/${id}`).mtime

        return new Message(id, author, message, dateCreated)
    }

    getLatestMessage(): Message{
        let allMessages: Message[] = this.getAllMessages()

        return allMessages[0]
    }
}