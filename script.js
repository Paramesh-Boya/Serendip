const quotes = [
  '“You are my today and all of my tomorrows.”',
  '“Love is composed of a single soul inhabiting two bodies.” — Aristotle',
  '“In you, I’ve found the love of my life and my closest, truest friend.”',
  '“If I know what love is, it is because of you.” — Herman Hesse',
  '“Every love story is beautiful, but ours is my favorite.”'
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
