const RandomQuoteGenerator = require('./services/RandomQuoteGenerator'); // Adjust the path if necessary

const generator = new RandomQuoteGenerator();

const randomQuote = generator.getRandomQuote();
if (randomQuote) {
    console.log(JSON.stringify(randomQuote, null, 2)); // Pretty print the output
} else {
    console.log('No quotes available.');
}
