const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loader
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loader
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//Get Quote From API
function newQuote(){
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    if(!quote.author){
        authorText.textContent = 'Sahibi Bilinmiyor.';
    } else{
        authorText.textContent = quote.author;
    }
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}
//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
newQuote();