// API
const url = "https://api.quotable.io/random";

let quote = document.querySelector('q');
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// Copy Quote
const myInp = document.getElementById('quote').innerHTML
const btnCopy = document.getElementById('copy-icon')

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = ' ' + item.content + ' ';
            author.innerText = '- ' + item.author;
            btnCopy.onclick = function () {
                item.content.select()
                document.execCommand("Copy")
                alert('Quote Copied to clipboard')
            }
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);