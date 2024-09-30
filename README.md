# Quote Guru

![NPM Version](https://img.shields.io/npm/v/quote-guru)
![License](https://img.shields.io/npm/l/quote-guru)

Quote Guru is a lightweight, easy-to-use library that provides random inspirational quotes. It provides each quote with its author and a neatly formatted HTML blockquote. Perfect for adding a touch of wisdom or motivation to your apps, websites, or projects!

## Features

- Retrieve random quotes from a predefined JSON file.
- Each quote includes the text, author, and a formatted blockquote.
- Lightweight and easy to integrate.

## Installation

You can install **quote-guru** via npm:

```bash
npm install quote-guru
```

## Usage

First, import the `RandomQuoteGenerator` class into your project:

```javascript
import RandomQuoteGenerator from 'quote-guru'; // Adjust the path if using locally
```

Then, create an instance of the `RandomQuoteGenerator`:

```javascript
const quoteGenerator = new RandomQuoteGenerator();
```

### Methods

#### `getRandomQuote()`
Returns a random quote with the quote text, author, and a preformatted block quote.
```javascript
const randomQuote = quoteGenerator.getRandomQuote();
console.log(randomQuote);
/*
{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
    blockQuote: "<blockquote>&ldquo;Genius is one percent inspiration and ninety-nine percent perspiration.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
}
*/
```

#### `getRandomQuoteByAuthor(author)`
Retrieves all quotes by the specified author. If the author is not found or the input is invalid, an error message will be returned.
```javascript
const quotesByAuthor = quoteGenerator.getRandomQuoteByAuthor('Thomas Edison');
console.log(quotesByAuthor);
/*
[
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
        blockQuote: "<blockquote>&ldquo;Genius is one percent inspiration and ninety-nine percent perspiration.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
    }
]
*/
```

#### `getRandomQuoteAndAuthor()`
Returns a random quote with just the text and author.
```javascript
const quoteAndAuthor = quoteGenerator.getRandomQuoteAndAuthor();
console.log(quoteAndAuthor);
/*
{
    quote: "You can observe a lot just by watching.",
    author: "Yogi Berra"
}
*/
```

### Edge Cases and Validations
- The `getQuoteByAuthor` method requires the `author` parameter to be a non-empty string. It will throw a validation error if the input is invalid.
- If there are no quotes available (i.e., an empty quotes array), the `getQuote` and `getQuoteAndAuthor` methods will return `null`, and `getQuoteByAuthor` will return an empty array.

Feel free to experiment with these methods to get different quotes or filter by specific authors!


### JSON File Structure

The quotes are retrieved from a JSON file located in the `assets` directory. The file should have the following format:

```json
[
    {
        "quoteText": "Your quote here.",
        "quoteAuthor": "Author Name"
    },
    {
        "quoteText": "Another quote.",
        "quoteAuthor": "Another Author"
    }
]
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'feat(Feature): Add some Feature'`).
4. Push to the branch (`git push origin feature/yourFeature`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily integrate random quotes into their applications. If you have any questions or suggestions, feel free to reach out!

## Acknowledgements

- [ZenQuotes API][zenquotes-url] for inspiration.

## Credits

This project uses a JSON quotes database provided by [JamesFT][jamesft-github-url]. You can find the original quotes database [here][jamesft-github-quotes-url]. Special thanks to JamesFT for making this valuable resource available!


[zenquotes-url]: https://zenquotes.io
[jamesft-github-url]: https://github.com/JamesFT/Database-Quotes-JSON
[jamesft-github-quotes-url]: https://github.com/JamesFT/Database-Quotes-JSON/blob/master/quotes.json
