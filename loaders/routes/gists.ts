// Remix awaits this loader, and a fetch request resolves to a Response object,
// which is what Remix is expecting to receive, so we don't have to await res.json.
// Loaders can still return plain objects, you just lose control of your headers.
// Remix comes with a `json` helper to wrap your data and give you header control.
module.exports = () => {
  return fetch("https://api.github.com/gists");
};
