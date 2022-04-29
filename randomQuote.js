const randomQuotes = ['Do it now. It is not safe to leave a generous feeling to the cooling influences of the world.', 'Dreams come true. Without that possibility, nature would not incite us to have them.', 'The great thing about democracy is that it gives every voter a chance to do something stupid.', 'If you can find something everyone agrees on, it\'s wrong.']

// Default Quote
let quote = document.querySelector('q')
quote.innerHTML = randomQuotes[0]

// Random Quote Function
let quoteButton = document.querySelector('button')
quoteButton.onclick = () => {
    let randomNumber = Math.floor(Math.random() * 4)
    quote.innerHTML = randomQuotes[randomNumber]
}

// Date
let date = document.getElementById('date')
date.innerHTML = new Date().getMonth() + 1 + "/" + new Date().getDate()
console.log(date.innerHTML)