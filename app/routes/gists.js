import React from "react";
import { useRouteData } from "@remix-run/react";

// data from loader is also passed here
export function meta({ data }) {
  return {
    title: "Public Gists",
    description: `View the latest ${data.length} gists from the public.`,
  };
}

export function headers({ loaderHeaders }) {
  return {
    // max-age tells the user's browser to cache for 300s. If they click back or
    // on a link to the same page again within 5 minutes, the browser won't even
    // make a request for the page, it will use the cache. s-max-age tells the
    // CDN to cache the page for 1 hour.
    //
    // "cache-control": "public, max-age=300, s-max-age=3600",

    // Our data (loader) usually knows better what the cache control should be
    // than our markup (route), so Remix gives us `loaderHeaders` as an arg, which
    // is an instance of the Fetch API Headers constructor. Now when a browser or
    // CDN wants to cache the page, it gets the headers from the data source.
    // Secondly, Remix calls our loaders (via fetch) in the browser on client-side
    // transitions. So returning good cache headers here allows the browser to
    // use a cached version of the page when the user clicks back/forward, even
    // for pages you can't cache on the CDN.
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

export default function Gists() {
  const data = useRouteData();

  return (
    <div>
      <h2>Gists</h2>
      <ul>
        {data.map((gist) => (
          <li key={gist.id}>
            <a href={gist.html_url}>{Object.keys(gist.files)[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
