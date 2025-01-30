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

    if (!existingCategories.includes(category)) {
      // Add new category to the dropdown
      const newOption = document.createElement('option');
      newOption.value = category;
      newOption.textContent = category;
      dropdown.appendChild(newOption);
    }
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

     const blob = new Blob( [ data ], {
        type: "application/json;charset=utf-8"})

    // Save updated quotes to local storage without using JSON.stringify
  localStorage.setItem('quotes', JSON.stringify(quotes));

        // Get quotes from localStorage
        const storedQuotes = JSON.parse(localStorage.setItem('quotes')) || [];

  }
}

const button = document.querySelector('button[onclick="addQuote()"]');
button.addEventListener("click", createAddQuoteForm());


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

  // Sample quotes array with categories
const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "Life" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr.", category: "Friendship" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", category: "Life" },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", category: "Inspiration" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "Success" },
  // More quotes...
];

// Function to populate the dropdown with unique categories
function populateCategories() {
  const dropdown = document.getElementById('categoryFilter'); // Dropdown element
  
  // Extract unique categories from the quotes array
  const categories = [...new Set(quotes.map(quote => quote.category))];
  
  // Clear existing options
  dropdown.innerHTML = '';
  
  // Create a default 'Select category' option
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Select category';
  dropdown.appendChild(defaultOption);
  
  // Populate the dropdown with unique categories
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });
}





// Function to populate the dropdown with unique categories
function populateCategories() {
  const dropdown = document.getElementById('categoryDropdown');
  const categories = [...new Set(quotes.map(quote => quote.category))];
  
  // Clear existing options
  dropdown.innerHTML = '';
  
  // Create a default 'Select category' option
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Select category';
  dropdown.appendChild(defaultOption);
  
  // Populate the dropdown with unique categories
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });
}

// Function to filter quotes based on the selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const filteredQuotes = selectedCategory === 'Select category' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);
  
  // Get the quotes container and clear existing quotes
  const quotesContainer = document.getElementById('quotesContainer');
  quotesContainer.innerHTML = '';
  const storedPopulatedQuote = localStorage.getItem('selectedCategory')
  // Display the filtered quotes
  if (filteredQuotes.length > 0) {
    filteredQuotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote');
      quoteElement.innerHTML = `
      const storedPopulatedQuote = localStorage.setItem('selectedCategory);
        <p><strong>${quote.text}</strong></p>
        <p>- ${quote.author}</p>
        <p><em>Category: ${quote.category}</em></p>
      `;
      quotesContainer.appendChild(quoteElement);
    });
  } else {
    quotesContainer.innerHTML = '<p>No quotes found for this category.</p>';
  }
}
// Call the function to populate the dropdown (e.g., when the page loads)
populateCategories();
