import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/header";
import Navigation from "./components/nav";

import type { LinksFunction } from "@vercel/remix";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Indie+Flower&family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main-content-link">Skip to main content</a>
        <Header />
        <Navigation />
        <div id="main-content"></div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="fixed-width-wrapper fixed-padding" style={{borderTop: "1px solid #eee"}}>
          Made with ☕️ and ❤️ by <Link to="https://savvas.me/links">Savvas Stephanides</Link>.
        </footer>
      </body>
    </html>
  );
}
