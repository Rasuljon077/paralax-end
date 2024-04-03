const title = document.querySelector('.title');
let text = title.innerHTML
title.innerHTML = ''


function write(i = 0) {
    title.innerHTML += text[i]
    i++
    if (text.length > i) {
        setTimeout(() => write(i), 300);
    }
}
setTimeout(() => write(), 500);

const clouds = document.querySelectorAll('.cloud');
const boat = document.querySelector('.boat');

clouds.forEach(cloud => {
    window.addEventListener('scroll', () => {
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${scrollY * speed}px)`
        boat.style.transform = `translateX(${scrollY}px)`
    })
})

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img');

images.forEach(img => {
    div.addEventListener('mousemove', (e) => {
        let speed = img.getAttribute('data-speed')
        let x = e.pageX *speed / 20
        let y = e.pageY *speed / 10
        img.style.transform = `translate(${x}px,${y}px)`
    })
})

const timers =document.querySelectorAll(".timer")
const item =document.querySelector(".item")
const cards =document.querySelectorAll(".card")
const info =document.querySelector(".info")
let a = item.offsetTop - item.clientHeight * 2

console.log(a);


// console.log(cards);
window.addEventListener('scroll',()=>{
   console.log(scrollY);
    if (scrollY > a) {
        cards.forEach(card=>{
            card.style.transition = "0.5s"
            card.classList.add('active')
        }) 
    }
   
})

window.addEventListener('scroll', function scrollFunc() {
     
if (this.scrollY > item.offsetTop - item.clientHeight * 2) {
   
    timers.forEach(time=>{
    function rec(){
        let count = +time.getAttribute('count')
        time.innerHTML++
      if (time.innerHTML < count) {
        setTimeout(() => {
            rec()
        }, 25);
      }
    }
    rec()
})

window.removeEventListener('scroll', scrollFunc)
}
})

const btns = document.querySelectorAll('.btn');
const root = document.querySelector(':root');

btns.forEach(btn=>{
    window.addEventListener('mouseover', (e)=>{
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)
    })
    btn.onclick = () => {
        root.style.setProperty('--color', 'red')
        localStorage.setItem('color', 'red')
    }
    btn.ondblclick = () => {
        root.style.setProperty('--color', 'yellow')
        localStorage.setItem('color', 'yellow')
    }
})
root.style.setProperty('--color', localStorage.getItem('color'))