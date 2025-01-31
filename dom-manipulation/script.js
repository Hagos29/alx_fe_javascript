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

// Function to fetch data
async function name(params) {
  
}
async function fetchData() {
  const dataFectched = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data);
      // Here, you can update your UI with the fetched data.
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the fetchData function every 5 seconds (5000ms)
setInterval(fetchData, 5000);


// Function to fetch new quotes and resolve conflicts
function fetchQuotesFromServer() {
  fetch('https://jsonplaceholder.typicode.com/posts') // Simulating quotes as titles of posts
    .then(response => response.json())
    .then(data => {
      // Extract the quote data (titles of posts will be treated as quotes)
      const newQuotes = data.map(post => post.title);
      console.log('New quotes fetched from server:', newQuotes);

      // Get the existing quotes from localStorage (or an empty array if none exists)
      let existingQuotes = JSON.parse(localStorage.getItem('quotes')) || [];

      // Use a Set to store unique quotes to avoid duplicates
      const updatedQuotes = new Set(existingQuotes);

      // Add the new quotes from the server
      newQuotes.forEach(quote => {
        updatedQuotes.add(quote);  // Add the new quote to the updated quotes
      });

      // Convert the Set back to an array and update localStorage
      localStorage.setItem('quotes', JSON.stringify(Array.from(updatedQuotes)));

      // Optional: Log the updated quotes in localStorage
      console.log('Updated quotes in localStorage:', Array.from(updatedQuotes));
    })
    .catch(error => {
      console.error('Error fetching quotes:', error);
    });
}

// Periodically fetch new quotes every 10 seconds (10000ms)
const intervalId = setInterval(fetchAndResolveQuotes, 10000);

// Stopping after 1 minute to prevent infinite fetching
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Stopped periodic quote fetching');
}, 60000); // Stops after 60 seconds


// Function to show a notification
function showNotification(message, type = 'info') {
  const notificationElement = document.getElementById('notification');
  notificationElement.innerText = message;
  notificationElement.style.backgroundColor = type === 'info' ? '#4CAF50' : '#f44336'; // Green for info, Red for conflict
  notificationElement.style.display = 'block';

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notificationElement.style.display = 'none';
  }, 3000);
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
      const syncQuotes = document.createElement('div');
      syncQuotes.classList.add('quote');
      syncQuotes.innerHTML = `
      const storedPopulatedQuote = localStorage.setItem('selectedCategory);
        <p><strong>${quote.text}</strong></p>
        <p>- ${quote.author}</p>
        <p><em>Category: ${quote.category}</em></p>
      `;
      quotesContainer.appendChild(syncQuotes);
    });
  } else {
    quotesContainer.innerHTML = '<p>No quotes found for this category.</p>';
  }
}
// Call the function to populate the dropdown (e.g., when the page loads)
populateCategories();

function postUpdatedData(newQuotes) {
  const updatedData = { quotes: newQuotes };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData), // Send the updated quotes as JSON
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server responded with:', data);
      showNotification('Quotes synced with server!', 'info');
    })
    .catch(error => {
      console.error('Error posting data:', error);
      showNotification('Error updating server data.', 'error');
    });
}