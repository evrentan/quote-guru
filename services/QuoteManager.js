import Validator from "../utils/Validator";

class QuoteManager {
    constructor(quotes) {
        this.quotes = quotes || [];
    }

    /**
     * Get a random quote
     * @returns {{quote: *, blockQuote: string, author: *}|null}
     */
    getRandomQuote() {
        if (this.quotes.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        const selectedQuote = this.quotes[randomIndex];

        return {
            quote: selectedQuote.quoteText,
            author: selectedQuote.quoteAuthor,
            blockQuote: `<blockquote>&ldquo;${selectedQuote.quoteText}&rdquo; &mdash; <footer>${selectedQuote.quoteAuthor}</footer></blockquote>`
        };
    }

    /**
     * Get a quote by a specific author (case-insensitive)
     * @param {string} author - The author's name to filter quotes by
     * @returns {Array} - An array of quotes by the specified author
     */
    getRandomQuoteByAuthor(author) {
        Validator.validateAuthor(author);

        const normalizedAuthor = author.trim().toLowerCase();

        const filteredQuotes = this.quotes.filter(quote =>
            quote.quoteAuthor && quote.quoteAuthor.trim().toLowerCase() === normalizedAuthor
        );

        return filteredQuotes.map(quote => ({
            quote: quote.quoteText,
            author: quote.quoteAuthor,
            blockQuote: `<blockquote>&ldquo;${quote.quoteText}&rdquo; &mdash; <footer>${quote.quoteAuthor}</footer></blockquote>`
        }));
    }

    /**
     * Get a random quote and its author
     * @returns {{quote: *, author: *}|null}
     */
    getRandomQuoteAndAuthor() {
        const randomQuote = this.getRandomQuote()

        return randomQuote ? {
            quote: randomQuote.quote,
            author: randomQuote.author
        } : null;
    }
}

export default QuoteManager;
