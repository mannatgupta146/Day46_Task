let heart = document.querySelector('#heart')
let img = document.querySelector('#img')

img.addEventListener('dblclick', function(){
    heart.style.opacity = 1
    heart.style.transform = 'translate(-50%,-50%) scale(2)'
})