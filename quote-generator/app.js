const apiUrl = "https://dummyjson.com/quotes/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  quote.textContent = data.quote;
  author.textContent = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.textContent +
      " ---- by " +
      author.textContent,
    "tweet-window",
    "width=600, height=300",
  );
}

getQuote(apiUrl);
