import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Submit your own message on Say Something" },
      { name: "description", content: "Submit your own message on Say Something" },
    ];
  };

export default function Write(){
    return(
        <article className="fixed-width-wrapper fixed-padding">
            <h1>Submit your own message on Say Something!</h1>
        </article>
    )
}