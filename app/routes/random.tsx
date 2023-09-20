import { useEffect } from "react"
import { MessageService } from "~/modules/messages/message-service"
import { LoaderArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { Message } from "~/modules/messages/message";

export const loader = async () => {
    const messageService = new MessageService()

    let messages = messageService.getAllMessages()

    return json({
        messages
      })
}

export default function RandomMessage(){
    const {messages} = useLoaderData<typeof loader>()

    useEffect(() => {
        let random: number = Math.floor(Math.random() * messages.length)        

        let randomMessage: Message = messages[random]

        location.href = `/message/${randomMessage.id}`
        
    }, [])
    return (<div>Getting a random message...</div>)
}