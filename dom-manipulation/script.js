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


}
// Add quote function
function createAddQuoteForm() {
   

    // Check if both fields are filled out
    if (quoteText && categoryText) {
        //create a quote object
        const newQuote ={
            text: quoteText,
            category: categoryText
        }
    }

         // Create the form element
         const form = document.createElement('form');
         form.id = 'addQuoteForm';
         
         //append input to form
         form.appendChild(quoteInput);
         form.appendChild(quoteCategoryInput)
    
    
}


 // Add an event listener for form submission
 showNewQuoteBtn.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const quoteText = quoteInput.value.trim();
    const categoryText = quoteCategoryInput.value.trim();

    // Only add a new quote if both fields are filled
    if (quoteText && categoryText) {
        // Create a new quote object and add it to the array
        const newQuote = { text: quoteText, category: categoryText };
        quotes.push(newQuote);

        // Reset the form fields
        quoteText.value = '';
        categoryText.value = '';

        // Optionally, show the newly added quote or a success message
        alert('New quote added successfully!');
    } else {
        alert('Please fill in both fields.');
    }
});

