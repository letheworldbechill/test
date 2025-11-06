
function calculateScore() {
  let boxes = document.querySelectorAll('input[type=checkbox]');
  let score = 0;
  boxes.forEach(b=>{ if(b.checked) score += parseInt(b.value);});
  let r = document.getElementById("result");
  if(score < 4) r.innerText = "✅ Gesund -> Score: " + score;
  else if(score < 6) r.innerText = "⚠️ Warnzeichen -> Score: " + score;
  else r.innerText = "🚨 Hoch toxisch -> Score: " + score;
}
