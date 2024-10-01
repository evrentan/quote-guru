import QuoteManager from '../src/services/QuoteManager.js';
import Validator from "../src/utils/Validator.js";

jest.mock('../src/utils/Validator.js', () => ({
    validateAuthor: jest.fn(),
}));

describe('QuoteManager', () => {
    const sampleQuotes = [
        {
            quoteText: "The only limit to our realization of tomorrow is our doubts of today.",
            quoteAuthor: "Franklin D. Roosevelt"
        },
        {
            quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
            quoteAuthor: "Thomas Edison"
        },
        {quoteText: "Imagination is more important than knowledge.", quoteAuthor: "Albert Einstein"}
    ];

    describe('constructor', () => {
        it('should initialize with an empty array if no quotes are provided', () => {
            const manager = new QuoteManager();
            expect(manager.quotes).toEqual([]);
        });

        it('should initialize with the provided quotes array', () => {
            const manager = new QuoteManager(sampleQuotes);
            expect(manager.quotes).toEqual(sampleQuotes);
        });

        it('should initialize with an empty array if a non-array is provided', () => {
            const manager = new QuoteManager("invalid quotes");
            expect(manager.quotes).toEqual([]);
        });
    });

    describe('getRandomQuote', () => {
        it('should return null if there are no quotes', () => {
            const manager = new QuoteManager([]);
            expect(manager.getRandomQuote()).toBeNull();
        });

        it('should return a random quote object with the correct properties', () => {
            const manager = new QuoteManager(sampleQuotes);
            const randomQuote = manager.getRandomQuote();

            expect(randomQuote).toHaveProperty('quote');
            expect(randomQuote).toHaveProperty('author');
            expect(randomQuote).toHaveProperty('blockQuote');

            // Ensure the block quote is formatted correctly
            expect(randomQuote.blockQuote).toContain(`&ldquo;${randomQuote.quote}&rdquo;`);
            expect(randomQuote.blockQuote).toContain(`<footer>${randomQuote.author}</footer>`);
        });
    });

    describe('getRandomQuoteByAuthor', () => {
        it('should call Validator.validateAuthor with the correct input', () => {
            const manager = new QuoteManager(sampleQuotes);
            const inputAuthor = "Thomas Edison";
            manager.getRandomQuoteByAuthor(inputAuthor);
            expect(Validator.validateAuthor).toHaveBeenCalledWith(inputAuthor);
        });

        it('should return null if no quotes match the author', () => {
            const manager = new QuoteManager(sampleQuotes);
            const result = manager.getRandomQuoteByAuthor('Unknown Author');
            expect(result).toBeNull();
        });

        it('should return a random quote by the specified author (case-insensitive)', () => {
            const manager = new QuoteManager(sampleQuotes);
            const author = 'thomas edison'; // lowercase to test case-insensitivity
            const result = manager.getRandomQuoteByAuthor(author);

            expect(result).toHaveProperty('quote');
            expect(result).toHaveProperty('author', 'Thomas Edison');
            expect(result.blockQuote).toContain(`&ldquo;${result.quote}&rdquo;`);
            expect(result.blockQuote).toContain(`<footer>${result.author}</footer>`);
        });

        it('should handle authors with leading/trailing spaces', () => {
            const manager = new QuoteManager(sampleQuotes);
            const result = manager.getRandomQuoteByAuthor('  Thomas Edison  ');

            expect(result).toHaveProperty('author', 'Thomas Edison');
        });
    });

    describe('getRandomQuoteAndAuthor', () => {
        it('should return null if there are no quotes', () => {
            const manager = new QuoteManager([]);
            expect(manager.getRandomQuoteAndAuthor()).toBeNull();
        });

        it('should return only the quote and author from the random quote', () => {
            const manager = new QuoteManager(sampleQuotes);
            const result = manager.getRandomQuoteAndAuthor();

            expect(result).toHaveProperty('quote');
            expect(result).toHaveProperty('author');
            expect(result).not.toHaveProperty('blockQuote');
        });
    });
});
