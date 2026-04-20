//References:
//https://codepen.io/mikeeveraa/pen/dyEzrLq Author Miguel Vera
// Help modifying and explaining code using Claude (claude.ai)


const container = document.querySelector('.lyricsOne');
const words = ['sitting'];

let inactivityTime = 1000;
let displayInterval = 100;
let inactivityTimer, wordTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    clearInterval(wordTimer);
    removeAllWords();
    inactivityTimer = setTimeout(startWordCascade, inactivityTime);
}

function removeAllWords() {
    document.querySelectorAll('.falling-word').forEach(word => {
        word.remove();
    });
}

function startWordCascade() {
    wordTimer = setInterval(() => {
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

document.addEventListener('mousedown', resetInactivityTimer);

resetInactivityTimer();