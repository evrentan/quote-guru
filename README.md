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

Here’s how to use the library in your project:

### Import the Library

```javascript
const QuoteGuru = require('quote-guru');
```

### Create an Instance

```javascript
const quoteGuru = new QuoteGuru();
```

### Get a Random Quote

To get a random quote, use the `getRandomQuote()` method:

```javascript
const randomQuote = quoteGuru.getRandomQuote();
console.log(randomQuote);
```

### Sample Output

The output will be in the following format:

```json
{
    "quote": "Sometimes things become possible if we want them bad enough.",
    "author": "T.S. Eliot",
    "blockQuote": "<blockquote>&ldquo;Sometimes things become possible if we want them bad enough.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
}
```

## JSON File Structure

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
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily integrate random quotes into their applications. If you have any questions or suggestions, feel free to reach out!

## Acknowledgements

- [ZenQuotes API](https://zenquotes.io) for inspiration.
