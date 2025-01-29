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
   // Get the values from the form inputs
   const quoteText = quoteInput.value.trim();
   const categoryText = quoteCategoryInput.value.trim();

    // Check if both fields are filled out
    if (quoteText && categoryText) {
        //create a quote object
        const newQuote ={
            text: quoteText,
            category: categoryText
        }

            // Retrieve existing quotes from localStorage
            const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        
            // Add new quote to the array
            quotes.push(newQuote);
            
            // Save the updated quotes array to localStorage
            localStorage.setItem('quotes', JSON.stringify(quotes));
            
            // Clear the input fields
            quoteInput.value = '';
            authorInput.value = '';
            
            // Reload the quotes list to update the display
            loadQuotes();
        } else {
            alert("Please fill out both fields.");
        }
    
    }

    

         // Create the form element
         const form = document.createElement('form');
         form.id = 'addQuoteForm';
         
         //append input to form
         form.appendChild(quoteInput);
         form.appendChild(quoteCategoryInput)
    
    



 // Add an event listener for form submission
 showNewQuoteBtn.addEventListener('submit', function(event) {
    event.preventDefault();

    

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


// Load stored quotes from localStorage
function loadQuotes() {
    // Get quotes from localStorage, parse them, or initialize as an empty array if not found
    const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    
    // Clear current list in case of updates
    quotesList.innerHTML = '';
    
    // Iterate through stored quotes and display them
    quotes.forEach((quote, index) => {
       quotePara.textContent = `"${quoteText.text}" — ${categoryText.category}`;
        categoryPara.textContent =`"${quoteText.text}" — ${categoryText.category}`;
        
        // Create a remove button for each quote
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeQuote(index);
        
        quotePara.appendChild(removeBtn);
        categoryParaPara.appendChild(removeBtn);
        quoteDisplay.appendChild(quotePara);
        quoteDisplay.appendChild(categoryPara);
    });
}


function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }