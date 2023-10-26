import type { MetaFunction } from "@remix-run/node";
import "~/style/style.css"
import { LoaderArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { MessageService } from "~/modules/messages/message-service";

export const loader = async ({params}: LoaderArgs) => {
    const messageService = new MessageService()

    let message = await messageService.getMessageById(params.messageId)

    return json({
        message
      })
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    return [
        { title: `A message from ${data?.message.author} - Say Something` },
        { name: "description", content: `A message from ${data?.message.author}` },
    ];
};

export const authorElement = (author: string, authorGravatar: string = "") => {
    let authorElement = <span>{author}</span>;
    if (authorGravatar.length > 0) {
        authorElement = <span><img className="author-gravatar" src={authorGravatar} alt={author} />&nbsp;&nbsp;{author}</span>;
    }
    return authorElement;
}

export default function Index() {
    const {message} = useLoaderData<typeof loader>()


    

    console.log(message);
    

    return (
        <main>

            <section className="fixed-width-wrapper fixed-padding" id="message">
                <h2 className="visually-hidden">Message by {message?.author}</h2>

                <div style={{ fontSize: "21px", marginTop: "15px" }}>{authorElement(message.author, message.authorGravatar)} said:</div>
                <div style={{ marginTop: "21px"}}>
                    {
                        message.message.map((line) => (
                            <p className="message-line handwritten-message" style={{marginTop: "30px"}}>{line}</p>
                        ))
                    }
                </div>
            </section>
            <section className="fixed-width-wrapper fixed-padding">
                <h2>Share this message</h2>
                <ul className="no-bullet-list" style={{marginTop: "15px"}}>
                    <li><a style={{display: "block", backgroundColor: "#030303", color: "white", padding: "15px", textDecoration: "none", borderRadius: "15px"}} href={`https://twitter.com/intent/tweet?text=Check out this message by ${message.author} on Say Something! https://just-say-something.vercel.app/message/${message.id}`}>Share on X (Twitter)</a></li>
                </ul>
            </section>
        </main>
    );
}
