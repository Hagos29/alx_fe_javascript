// Get references to the HTML elements
const quoteInput = document.getElementById('newQuoteText');
const quoteCategoryInput = document.getElementById('newQuoteCategory');
const showNewQuoteBtn = document.getElementById('newQuote');

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * newQuote.length);
    const quote = newQuote[randomIndex];

    //display for the quote and category
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = '';

    // Create elements for the quote text and category
    const quotePara = document.createElement('p');
    quotePara.textContent = `" ${quoteText.text}"`;

   const categoryPara  = document.createElement('p');
   categoryPara.textContent =`${categoryText.category}`;

   // Append them to the quote container
   quoteDisplay.appendChild(quotePara);
   quoteDisplay.appendChild(categoryPara);

     // Create the form element
     const form = document.createElement('form');
     form.id = 'addQuoteForm';
     
     //append input to form
     form.appendChild(quoteInput);
     form.appendChild(quoteCategoryInput)

}

// Add quote function
function createAddQuoteForm() {
    const quoteText = quoteInput.value.trim();
    const categoryText = quoteCategoryInput.value.trim();

    // Check if both fields are filled out
    if (quoteText && categoryText) {
        //create a quote object
        const newQuote ={
            text: quoteText,
            category: categoryText
        }
    }
}

