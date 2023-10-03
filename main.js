let span = document.getElementById('p')
let span2 = document.getElementById('p2')
let bar1 = document.getElementById('bar1')
let bar2 = document.getElementById('bar2')

bar1.addEventListener('mouseover' , function(){
    span.classList.remove('dis')
    bar1.style.backgroundColor = 'hsl(187, 36%, 85%)'
})
bar1.addEventListener('mouseleave' , function(){
    span.classList.add('dis')
    bar1.style.backgroundColor = 'hsl(186, 34%, 60%)'
})

bar2.addEventListener('mouseover' , function(){
    span2.classList.remove('dis')
    bar2.style.backgroundColor = 'hsl(10, 97%, 75%)'
})
bar2.addEventListener('mouseleave' , function(){
    span2.classList.add('dis')
    bar2.style.backgroundColor = 'hsl(10, 79%, 65%)'
})