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

            <h2>Go to the Say Something Github repository</h2>
            <img src="/write-page-assets/repo.png" alt="" />

            <h2>Create a fork</h2>
            <img src="/write-page-assets/fork-button.png" alt="" />
            <img src="/write-page-assets/create-fork-page.png" alt="" />
            <img src="/write-page-assets/forked-repo.png" alt="" />

            <details>
            <summary><h3>Using the Terminal</h3></summary>
            <p>
              Terminal
            </p>
            </details>

            <h3>Using the Github web interface</h3>

            <h2></h2>
        </article>
    )
}