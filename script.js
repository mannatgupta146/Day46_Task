let heart = document.querySelector('#heart')
let img = document.querySelector('#img')

img.addEventListener('dblclick', function(){
    heart.style.opacity = 1
    heart.style.transform = 'translate(-50%,-50%) scale(2) rotate(0deg)'

    setTimeout(function () {
        heart.style.transform = 'translate(-50%,-420%) scale(1) rotate(60deg)'
    }, 800)

    setTimeout(function () {
        heart.style.opacity = 0.5
    }, 850)
    
    setTimeout(function () {
        heart.style.opacity = 0
    }, 950)

    setTimeout(function () {
        heart.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200)
})