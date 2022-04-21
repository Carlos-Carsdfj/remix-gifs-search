import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  //useLoaderData
} from "@remix-run/react";
//import { json } from "@remix-run/node";
import styles from "./tailwind.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];
export const meta = () => ({
  charset: "utf-8",
  title: "Gify Search",
  viewport: "width=device-width,initial-scale=1",
});

/*export async function loader() {
  return json({
    ENV: {
      GIPHY_APP_KEY: process.env.GIPHY_APP_KEY,
    },
  });
}*/
export default function App() {
  //const data = useLoaderData()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
 {/*       <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />*/}
      </body>
    </html>
  );
}
