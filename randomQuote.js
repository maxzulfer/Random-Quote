// API
const url = "https://api.quotable.io/random";

let quote = document.querySelector('q');
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = ' ' + item.content + ' ';
            author.innerText = '- ' + item.author;
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);