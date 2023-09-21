import { Link } from "@remix-run/react";
import { useEffect } from "react";

export default function Navigation(){
  useEffect(() => {
    document.querySelectorAll(".navigation-list li a.js-only")
      .forEach((navigationElement) => {
        navigationElement.setAttribute("show", "1")
      })
  })
    return (<nav style={{borderBottom: "1px solid #efefef"}}>
        <ul className="fixed-width-wrapper fixed-padding no-bullet-list navigation-list">
          <li><Link to="/write" className="strong-call-to-action-link" aria-label="Submit your own message on Say Something">Write!</Link></li>
          <li><Link to="/random" className="js-only" aria-label="Read a random message">Random</Link></li>
        </ul>
      </nav>)
}