import * as fs from "fs"
import { Message } from "~/modules/messages/message"
import { MessageService } from "~/modules/messages/message-service"

let messageIds: string[] = fs.readdirSync("app/messages")

let messageService: MessageService = new MessageService()

messageIds.forEach((messageId) => {
    console.log(`Checks for message: ${messageId}`)

    if(messageId.includes(" ")){
        throw "❌ File name contains spaces"
    }

    if(!messageId.match(/^[-a-zA-Z0-9]+$/g)){
        throw "❌ File name should only contain letters, numbers and dashes (-). Eg. 'my-message'"
    }

    console.log("✅ File name is in the correct format.")
    
    let file = fs.readFileSync(`app/messages/${messageId}`).toString()

    let fileLines: string[] = file.split("\n")

    if(fileLines.length < 3){
        throw "❌ File should be at least 3 lines long."
    }

    console.log("✅ File is at least 3 lines long.")

    if(!fileLines[0].startsWith("By: ")){
        throw "❌ First line doesn't start with 'By: '"
    }
    console.log("✅ First line starts with 'By: '")

    if(fileLines[1] !== ''){
        throw "❌ Second line should be blank"
    }

    console.log("✅ Second line is blank.")

    if(fileLines[2].length === 0){
        throw "❌ Third line is blank"
    }

    console.log("✅ Third line is not blank")

    let message: Message = messageService.getMessageById(messageId)

    if(message.author.trim().length === 0){
        throw "❌ Author field is blank"
    }
    console.log("✅ Author field is not blank")

    if(message.message.join().trim().length === 0){
        throw "❌ Message field is blank"
    }
    console.log("✅ Message field is not blank")

    if(message.message.join().trim().length > 400){
        throw "❌ Message is too long"
    }
    console.log("✅ Message is under 400 characters long")


})