// Get references to the HTML elements
const quoteInput = document.getElementById("newQuoteText");
const categoryInput = document.getElementById("newQuoteCategory");
const showQuoteBtn = document.getElementById("newQuote");
const quoteDisplayDiv = document.getElementById("quoteDisplay");



function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("newQuoteText").innerHTML = randomQuote;
}

showRandomQuote();



function createAddQuoteForm() {
  const quoteText = quoteInput.value.trim();
  const categoryText = categoryInput.value.trim();
// Get quotes from localStorage
 const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
// Check if both fields are filled out
  if (quoteText && categoryInput) {
    const quotes = {
      text: newQuote,
      category: newCategory,
    };
    //create element
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    
    li.textContent = quoteText;
    li.textContent = categoryText;
    // Add new quote to the array
     addQuote.push(quotes);

      // Clear the input fields
      quoteInput.value = '';
      categoryInput.value = '';
    //append child to element
    const newQuoteText = li.appendChild(quoteText);
    const newCategoryText = li.appendChild(categoryText);

    ul.appendChild(newQuoteText);
    ul.appendChild(newCategoryText);

        // Get quotes from localStorage
        const storedQuotes = JSON.parse(localStorage.setItem('quotes')) || [];

  }
}

const button = document.querySelector('button[onclick="addQuote()"]');
button.addEventListener("click", createAddQuoteForm());
