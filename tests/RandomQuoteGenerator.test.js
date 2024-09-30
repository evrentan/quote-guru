import RandomQuoteGenerator from '../src/services/RandomQuoteGenerator.js';
import QuoteManager from '../src/services/QuoteManager.js';

let quoteGenerator;

beforeAll(async () => {
    quoteGenerator = new RandomQuoteGenerator();
    await quoteGenerator.loadQuotes(); // Load quotes from JSON file
});

describe('RandomQuoteGenerator', () => {
    // Test for valid random quote retrieval
    test('should return a random quote object', async () => {
        const quote = await quoteGenerator.getRandomQuote();
        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote).toHaveProperty('blockQuote');
    });

    // Test for retrieving quotes by a specific author
    test('should return a random quote matching the given author', async () => {
        const author = 'Thomas Edison';
        const quote = await quoteGenerator.getRandomQuoteByAuthor(author);

        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote.author).toBe(author);
    });

    // Test for retrieving a random quote and its author
    test('should return a random quote and its author', async () => {
        const quoteAndAuthor = await quoteGenerator.getRandomQuoteAndAuthor();
        expect(quoteAndAuthor).toHaveProperty('quote');
        expect(quoteAndAuthor).toHaveProperty('author');
    });

    // Edge case: Empty quotes array
    test('should handle an empty quotes array', async () => {
        const emptyQuoteGenerator = new RandomQuoteGenerator();
        emptyQuoteGenerator.quotes = [];
        emptyQuoteGenerator.quoteManager = new QuoteManager(emptyQuoteGenerator.quotes);

        expect(await emptyQuoteGenerator.getRandomQuote()).toBeNull();
        expect(await emptyQuoteGenerator.getRandomQuoteAndAuthor()).toBeNull();
        expect(await emptyQuoteGenerator.getRandomQuoteByAuthor('Any Author')).toBeNull();
    });

    // Edge case: Invalid author input
    test('should throw an error for invalid author input', async () => {
        await expect(quoteGenerator.getRandomQuoteByAuthor(null)).rejects.toThrow('Author must be a non-empty string!');
        await expect(quoteGenerator.getRandomQuoteByAuthor('')).rejects.toThrow('Author must be a non-empty string!');
        await expect(quoteGenerator.getRandomQuoteByAuthor(123)).rejects.toThrow('Author must be a non-empty string!');
    });

    // Edge case: Case-insensitive author search
    test('should return a random quote for a case-insensitive author search', async () => {
        const author = 'thomas edison';
        const quote = await quoteGenerator.getRandomQuoteByAuthor(author);

        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote.author).toBe('Thomas Edison');
    });

    // Edge case: Author not found
    test('should return null when no quotes are found for the given author', async () => {
        const quote = await quoteGenerator.getRandomQuoteByAuthor('Nonexistent Author');
        expect(quote).toBeNull();
    });

    // Edge case: Multiple quotes by the same author
    test('should return a random quote from multiple quotes by the same author', async () => {
        const author = 'Albert Einstein';
        const quote = await quoteGenerator.getRandomQuoteByAuthor(author);

        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote.author).toBe(author);
    });

    // Edge case: Random quote and author from a custom quotes array
    test('should return a quote from a custom quotes array', async () => {
        const quotes = [
            { quoteText: "Custom quote 1", quoteAuthor: "Custom Author 1" },
            { quoteText: "Custom quote 2", quoteAuthor: "Custom Author 2" },
        ];
        const customQuoteGenerator = new RandomQuoteGenerator();
        customQuoteGenerator.quotes = quotes;
        customQuoteGenerator.quoteManager = new QuoteManager(customQuoteGenerator.quotes);

        const quote = await customQuoteGenerator.getRandomQuoteByAuthor("Custom Author 1");
        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote.author).toBe("Custom Author 1");
    });

    // Edge case: Return null for a custom quotes array with no matching author
    test('should return null when no matching author in custom quotes array', async () => {
        const quotes = [
            { quoteText: "Custom quote 1", quoteAuthor: "Custom Author 1" },
        ];
        const customQuoteGenerator = new RandomQuoteGenerator();
        customQuoteGenerator.quotes = quotes;
        customQuoteGenerator.quoteManager = new QuoteManager(customQuoteGenerator.quotes);

        const quote = await customQuoteGenerator.getRandomQuoteByAuthor("Nonexistent Author");
        expect(quote).toBeNull();
    });
});
