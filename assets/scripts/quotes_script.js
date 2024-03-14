// This script is to use a local method of getting quotes
// !! Needs testing before use !!
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xBtn = document.getElementById("x-twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading 
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote 
function newQuote() {
    loading();
    // Pick a random quote from api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //  Check if author filed is blank and replace with "unknown"
    if (!quote.author) {
        authorText.textContent = ("Unknown")
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else{
        quoteText.classList.add("long-quote");
    }
    // Set Quote, Hide loader 
    quoteText.textContent = quote.text;
    complete();
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = (`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`);
    window.open(twitterUrl, '_blank')
}

// Event Listener
newQuoteBtn.addEventListener("click", newQuote);
xBtn.addEventListener("click", tweetQuote);

// On load 
getQuotes();

