import React from "react";

export function meta() {
  return {
    title: "Public Gists",
    description: "View the latest gists from the public.",
  };
}

export function headers() {
  return {
    // max-age tells the user's browser to cache for 300s. If they click back or
    // on a link to the same page again within 5 minutes, the browser won't even
    // make a request for the page, it will use the cache. s-max-age tells the
    // CDN to cache the page for 1 hour.
    "cache-control": "public, max-age=300, s-max-age=3600",
  };
}

export default function Gists() {
  return (
    <div>
      <h2>Gists</h2>
    </div>
  );
}
