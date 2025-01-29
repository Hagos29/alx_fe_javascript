// Get references to the HTML elements
const quoteInput = document.getElementById('newQuoteText');
const categoryInput = document.getElementById('newQuoteCategory');
const showQuoteBtn = document.getElementById('newQuote');
const quoteDisplayDiv = document.getElementById('quoteDisplay');

///create element
const ul = document.createElement('ul');
const li = document.createElement('li');

const quotes = {
    text: newQuote,
    category: newCategory
}


function ShowRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = randomQuote;

}

ShowRandomQuote();

function createAddQuoteForm() {
    const quoteText = quoteInput.value.trim();
    quoteText.textContent = quoteText;
    const categoryText = categoryInput.value.trim();
    categoryText.textContent = categoryText;

    if (quoteText && categoryInput) {
        //append child to element
        const newQuoteText = li.appendChild(quoteText);
        const newCategoryText = li.appendChild(categoryText)

        ul.appendChild(newQuoteText);
        ul.appendChild(newCategoryText);
    }
}

const button = document.querySelector('button[onclick="addQuote()"]');
button.addEventListener('click', createAddQuoteForm())
