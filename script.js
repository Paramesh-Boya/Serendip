const quotes = [
  '“You are my today and all of my tomorrows.”',
  '“In you, I’ve found  my closest, truest friend.”',
  '“If I know what love is, it is because of you.” — Paramesh'
]

let idx = 0
const quoteEl = document.getElementById('quote')
const nextBtn = document.getElementById('nextQuote')

function showQuote(i){
  quoteEl.style.opacity = 0
  setTimeout(()=>{
    quoteEl.textContent = quotes[i]
    quoteEl.style.opacity = 1
  },250)
}

nextBtn.addEventListener('click',()=>{
  idx = (idx+1)%quotes.length
  showQuote(idx)
})

// auto rotate
setInterval(()=>{ idx = (idx+1)%quotes.length; showQuote(idx)}, 4500)

// ----- image password logic -----
const unlockButtons = document.querySelectorAll('.unlock-btn');

function tryUnlock(btn) {
  const figure = btn.closest('figure');
  const correct = figure.getAttribute('data-password') || '';
  const attempt = prompt('Enter password to view this image:');
  if (attempt === null) return; // cancelled
  // normalize whitespace/case
  const normAttempt = attempt.trim();
  if (normAttempt === correct) {
    const wrapper = figure.querySelector('.img-wrapper');
    wrapper.classList.remove('locked');
    btn.textContent = 'Unlocked';
    btn.disabled = true;
  } else {
    alert('Wrong password, please try again.');
  }
}

unlockButtons.forEach(btn => {
  btn.addEventListener('click', () => tryUnlock(btn));
});
