const view = document.getElementById("view");

window.onhashchange = (_) => {
  const uri = location.hash.slice(2);
  if (uri.length <= 1) {
    let articles = JSON.parse(sessionStorage.getItem("articles"));
    if (articles) {
      articles = articles
        .map(
          (x) =>
            `<li><a href="#/${x.name}" style="text-transform:uppercase;">/${x.name}</a></li>`,
        )
        .join("");
      view.innerHTML = `<h1>Articles</h1><ul>${articles}</ul>`;
    }
  } else {
    fetch(`articles/${uri}/README.md`)
      .then((r) => (r.status == 200 ? r.text() : false))
      .then((m) => {
        if (!m) {
          view.innerHTML = "<h1>404</h1><h2>Not found!</h2>";
        } else {
          view.innerHTML = marked.parse(m);
          MathJax.typeset();
        }
      });
  }
};

if (!("articles" in sessionStorage)) {
  fetch("https://api.github.com/repos/moixllik/moixllik/contents/articles")
    .then((r) => (r.status == 200 ? r.text() : false))
    .then((d) => {
      if (d) {
        sessionStorage.setItem("articles", d);
      }
      window.onhashchange();
    });
}

window.onhashchange();
