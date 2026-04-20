//References:
//https://codepen.io/mikeeveraa/pen/dyEzrLq Author Miguel Vera
// Help modifying and explaining code using Claude (claude.ai)


const container = document.querySelector('.lyricsSix');
const words = ['Oh but California'];

let displayInterval = 1000;
let wordTimer;


function removeAllWords() {
    document.querySelectorAll('.falling-word').forEach(word => {
        word.remove();
    });
}

function startWordCascade() {
    wordTimer = setInterval(() => {
        if (container.querySelectorAll('.falling-word').length * 120 >= window.innerHeight) {
            container.querySelectorAll('.falling-word').forEach(word => word.remove());
        }
        displayRandomWord(words[0]);
    }, displayInterval);
}

function displayRandomWord(text) {
    const wordElem = document.createElement('div');
    wordElem.className = 'falling-word';
    wordElem.innerText = text;
    wordElem.style.position = 'absolute';
    wordElem.style.left = '50%'; 
    wordElem.style.transform = 'translateX(-50%)';
    wordElem.style.top = `${container.querySelectorAll('.falling-word').length * 120}px`;
    container.appendChild(wordElem);
}

startWordCascade();