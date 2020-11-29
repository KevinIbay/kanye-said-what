const kanye = new Kanye();
const kanyeSaid = document.querySelector("#kanyeSaid");
const newQuoteBtn = document.querySelector("#newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {
  kanye
    .getQuote()
    .then((res) => (kanyeSaid.textContent = res.quote))
    .catch((err) => console.log(err));
});
