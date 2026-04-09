const container = document.querySelector('.lyricsOne');
const word = "sitting";
const count = 5;

for (let i = 0; i < count; i++) {
  const p = document.createElement('p');
  p.textContent = word;
  p.style.animationDelay = `${i * 0.2}s`;
  p.style.position = 'absolute';
  p.style.left = '50%';
  p.style.transform = 'translateX(-50%)';
  container.appendChild(p);
}