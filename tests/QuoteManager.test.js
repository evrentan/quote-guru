import QuoteManager from '../src/services/QuoteManager.js';
import Messages from "../src/messages/Messages.js";

describe('QuoteManager', () => {
    let quoteManager;

    beforeEach(() => {
        quoteManager = new QuoteManager([
            { quoteText: "Test quote 1", quoteAuthor: "Author 1" },
            { quoteText: "Test quote 2", quoteAuthor: "Author 2" },
            { quoteText: "Test quote 3", quoteAuthor: "Author 1" },
        ]);
    });

    test('should return a random quote', () => {
        const quote = quoteManager.getRandomQuote();
        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote).toHaveProperty('blockQuote');
    });

    test('should return a random quote by a specific author', () => {
        const quote = quoteManager.getRandomQuoteByAuthor("Author 1");
        expect(quote).toHaveProperty('quote');
        expect(quote.author).toBe("Author 1");
    });

    test('should return null for non-existent author', () => {
        const quote = quoteManager.getRandomQuoteByAuthor("Nonexistent Author");
        expect(quote).toBeNull();
    });

    test('should throw an error for invalid author input', () => {
        expect(() => quoteManager.getRandomQuoteByAuthor(null)).toThrow(Messages.invalidAuthorError);
        expect(() => quoteManager.getRandomQuoteByAuthor('')).toThrow(Messages.invalidAuthorError);
        expect(() => quoteManager.getRandomQuoteByAuthor(123)).toThrow(Messages.invalidAuthorError);
    });

    test('should initialize with a non-empty array of quotes', () => {
        const quotes = [
            { quoteText: "Quote 1", quoteAuthor: "Author 1" },
            { quoteText: "Quote 2", quoteAuthor: "Author 2" },
        ];
        const quoteManager = new QuoteManager(quotes);
        expect(quoteManager.quotes).toEqual(quotes);
    });

    test('should initialize with an empty array when given an empty array', () => {
        const quoteManager = new QuoteManager([]);
        expect(quoteManager.quotes).toEqual([]);
    });

    test('should initialize with an empty array when given undefined', () => {
        const quoteManager = new QuoteManager(undefined);
        expect(quoteManager.quotes).toEqual([]);
    });

    test('should initialize with an empty array when given null', () => {
        const quoteManager = new QuoteManager(null);
        expect(quoteManager.quotes).toEqual([]);
    });

    test('should initialize with an empty array when given a non-array value', () => {
        const quoteManager = new QuoteManager("Not an array");
        expect(quoteManager.quotes).toEqual([]);
        const quoteManager2 = new QuoteManager(123);
        expect(quoteManager2.quotes).toEqual([]);
    });
});
