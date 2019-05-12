// Quote Generator

const quotes = [
    {
        quote: 'God never said that the journey would be easy, but He did say that the arrival would be worthwhile.',
        author: 'Max Lucado'
    },
    { quote: 'Glory is fleeting, but obscurity is forever.', author: 'Napoleon Bonaparte' },
    { quote: 'If you can’t fly, then run, If you can’t run, then walk, If you can’t walk, then crawl, but whatever you do, you have to keep moving forward.', author: 'Martin Luther King Jr' },
    { quote: 'Victory goes to the player who makes the next-to-last mistake.', author: 'Chessmaster Savielly Grigorievitch Tartakower (1887-1956)' },
    { quote: 'A lie gets halfway around the world before the truth has a chance to get its pants on.', author: 'Sir Winston Churchill' }
];

const outq = document.querySelector('#quote');
const outa = document.querySelector('#author');

let i = 0;

function changeQuote() {
    outq.innerHTML = quotes[i].quote;
    outa.innerHTML = quotes[i].author;
    i++;

    if (i >= quotes.length) {
        i = 0;
    }
}

setInterval(changeQuote, 3600);

// Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});
