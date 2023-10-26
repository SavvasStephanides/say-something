import { Message } from "./message";
import { createHash } from 'crypto';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from "path"

export class MessageService{
    private messagesDirectory: string = path.join(path.resolve(), "app/messages")

    private sanitizeAuthor(authorString: string) {
        return 
    }

    async getAllMessages(): Promise<Message[]>{
        const messageIds: string[] = await readdir(this.messagesDirectory)

        let messages: Message[] = await Promise.all(messageIds.map(async messageId => {
            return await this.getMessageById(messageId)
        }))
        
        messages = messages.sort((a,b) => b.dateCreated < a.dateCreated ? -1 : 1)
        
        return messages
    }

    async getMessageById(id: string): Promise<Message>{
        let file = await readFile(`${this.messagesDirectory}/${id}`, 'utf8')

        let splitMessage: string[] = file.split("\n")

        let author: string = splitMessage[0].replace("By: ", "")

        let authorGravatar = ""
        console.log(author)
        if (author.indexOf("<") != -1){
            let authorEmail = (author.split("<")[1]).split(">")[0];
            author = author.split("<")[0]
            let authorGravatarHash = createHash('sha256').update(authorEmail).digest('hex');
            authorGravatar = `https://gravatar.com/avatar/${authorGravatarHash}?s=75&r=g`;
        }

        splitMessage.shift()

        splitMessage = splitMessage.filter(line => line !== '')

        let dateCreated: Date = (await stat(`${this.messagesDirectory}/${id}`)).mtime

        let message = new Message(id, author, splitMessage, dateCreated, authorGravatar);
        return message;
    }

    async getLatestMessage(): Promise<Message>{
        let allMessages: Message[] = await this.getAllMessages()

        return allMessages[0]
    }
}