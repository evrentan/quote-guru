import quotesData from '../assets/quotes.json'; // Adjust the path as necessary
import QuoteManager from './QuoteManager';

class RandomQuoteGenerator {
    constructor(quotes = null) {
        this.quoteManager = new QuoteManager(quotes || quotesData);
    }

    getRandomQuote() {
        return this.quoteManager.getRandomQuote();
    }

    getRandomQuoteByAuthor(author) {
        return this.quoteManager.getRandomQuoteByAuthor(author);
    }

    getRandomQuoteAndAuthor() {
        return this.quoteManager.getRandomQuoteAndAuthor();
    }
}

export default RandomQuoteGenerator;
