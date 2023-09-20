import { Link } from "@remix-run/react";

export default function Navigation(){
    return (<nav style={{borderBottom: "1px solid #efefef"}}>
        <ul className="fixed-width-wrapper fixed-padding no-bullet-list navigation-list">
          <li><Link to="/write" className="strong-call-to-action-link">Write!</Link></li>
          <li><Link to="/random">Random</Link></li>
        </ul>
      </nav>)
}