import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import "~/style/style.css"
import "~/style/darkmode.css"
import { LoaderArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { Message } from "~/modules/messages/message";
import { MessageService } from "~/modules/messages/message-service";

export const meta: MetaFunction = () => {
  return [
    { title: "Say Something" },
    { name: "description", content: "People saying things." },
  ];
};

export const loader = async () => {
  const messageService: MessageService = new MessageService()

  let messages: Message[] = messageService.getAllMessages()

  return json({
      messages,
    })
}

export default function Index() {
  const {messages} = useLoaderData<typeof loader>()
  return (
    <div>
      <main>

        <section>
          <h2 className="fixed-width-wrapper fixed-padding" style={{marginTop: "30px"}}>Latest messages</h2>

          <ul className="fixed-width-wrapper fixed-padding no-bullet-list" style={{display: "flex", flexDirection: "column", gap: "30px"}}>
          {
            messages.map((message) => (
              <li key={message.id}>
                <Link to={`/message/${message.id}`} className="message-preview-module">
                  <div>
                    <div className="handwritten-message">{message.message.length > 100 ? `${message.message.slice(0,100)}...` : message.message}</div>
                    <div style={{marginTop: "15px"}}>from {message.author}</div>
                  </div>
                </Link>
              </li>
            ))
          }
          </ul>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}
