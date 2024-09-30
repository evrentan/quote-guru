// tests/RandomQuoteGenerator.test.js

import RandomQuoteGenerator from '../services/RandomQuoteGenerator';

let quoteGenerator;

beforeAll(() => {
    quoteGenerator = new RandomQuoteGenerator();
});

describe('RandomQuoteGenerator', () => {
    // Test cases for getRandomQuote method
    test('should return a random quote object', () => {
        const quote = quoteGenerator.getRandomQuote();
        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote).toHaveProperty('blockQuote');
    });

    // Test cases for getRandomQuoteByAuthor method
    test('should return quotes by a specific author', () => {
        const author = 'Thomas Edison';
        const quotes = quoteGenerator.getRandomQuoteByAuthor(author);

        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBeGreaterThan(0);
        quotes.forEach(quote => {
            expect(quote.author).toBe(author);
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('blockQuote');
        });
    });

    // Test cases for getRandomQuoteAndAuthor method
    test('should return a random quote and its author', () => {
        const quoteAndAuthor = quoteGenerator.getRandomQuoteAndAuthor();
        expect(quoteAndAuthor).toHaveProperty('quote');
        expect(quoteAndAuthor).toHaveProperty('author');
    });

    // Edge case: Empty quotes array
    test('should handle an empty quotes array', () => {
        const emptyQuoteGenerator = new RandomQuoteGenerator([]);
        expect(emptyQuoteGenerator.getRandomQuote()).toBeNull();
        expect(emptyQuoteGenerator.getRandomQuoteAndAuthor()).toBeNull();
        expect(emptyQuoteGenerator.getRandomQuoteByAuthor('Any Author')).toEqual([]);
    });

    // Edge case: Invalid author input
    test('should throw an error for invalid author input', () => {
        expect(() => quoteGenerator.getRandomQuoteByAuthor(null)).toThrow('Author must be a non-empty string!');
        expect(() => quoteGenerator.getRandomQuoteByAuthor('')).toThrow('Author must be a non-empty string!');
        expect(() => quoteGenerator.getRandomQuoteByAuthor(123)).toThrow('Author must be a non-empty string!');
    });

    // Edge case: Case-insensitive author search
    test('should return quotes for a case-insensitive author search', () => {
        const quotes = quoteGenerator.getRandomQuoteByAuthor('thomas edison');
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBeGreaterThan(0);
        quotes.forEach(quote => {
            expect(quote.author).toBe('Thomas Edison');
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('blockQuote');
        });
    });

    // Edge case: Author not found
    test('should return an empty array when no quotes are found for the given author', () => {
        const quotes = quoteGenerator.getRandomQuoteByAuthor('Nonexistent Author');
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(0);
    });

    // Edge case: Random quote and author from an empty quotes array
    test('should return null when quotes array is empty', () => {
        const emptyQuoteManager = new RandomQuoteGenerator([]);
        expect(emptyQuoteManager.getRandomQuote()).toBeNull();
    });

    // Edge case: Random quote and author from a custom quotes array
    test('should return quotes matching the given author', () => {
        const quotes = [
            { quoteText: "Test quote 1", quoteAuthor: "Author 1" },
            { quoteText: "Test quote 2", quoteAuthor: "Author 2" },
        ];
        const quoteManager = new RandomQuoteGenerator(quotes);
        expect(quoteManager.getRandomQuoteByAuthor("Author 1")).toEqual([{ quote: "Test quote 1", author: "Author 1", blockQuote: "<blockquote>&ldquo;Test quote 1&rdquo; &mdash; <footer>Author 1</footer></blockquote>" }]);
    });

    // Edge case: Random quote and author from a custom quotes array
    test('should handle non-existent author gracefully', () => {
        const quotes = [
            { quoteText: "Test quote 1", quoteAuthor: "Author 1" }
        ];
        const quoteManager = new RandomQuoteGenerator(quotes);
        expect(quoteManager.getRandomQuoteByAuthor("Nonexistent Author")).toEqual([]);
    });
});
