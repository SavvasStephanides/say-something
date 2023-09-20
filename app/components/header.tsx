import { Link } from "@remix-run/react";

export default function Header(){
    return (<header className="grey-background">
        <div className="fixed-width-wrapper fixed-padding">
        <div>
            <Link to="/" className="header-site-title-link">Say something.</Link>
        </div>
        </div>
    </header>
  )
}