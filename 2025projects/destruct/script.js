let boom = new Audio('explosion.mp3')
function bye(){
  boom.play()
  document.body.remove()
}