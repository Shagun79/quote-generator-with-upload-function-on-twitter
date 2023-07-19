async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");

  const quote = await response.json();

  document.getElementById("quote").innerHTML = quote.content;
  document.getElementById("author").innerHTML = quote.author;
}
function tweet() {
  window.open(
    (href =
      "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML),
    "Tweet Window",
    "width=600,height=300"
  );
}
