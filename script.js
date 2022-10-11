let closeBtn = document.querySelector('.closeButton')
closeBtn.addEventListener('click', ()=>{
    let menuBackground = document.querySelector('#menuBackground')
    menuBackground.classList.add('display-none')
    let menuContent = document.querySelector('#menuContent')
    menuContent.classList.add('display-none')
    let menuButton = document.querySelectorAll('.dropdowns')
    menuButton.forEach((item)=>{
        item.classList.add('display-none')
    })
})

let hambBtn = document.querySelector('#hamb-button')
hambBtn.addEventListener('click', ()=>{
    let menuContent = document.querySelector('#menuContent')
    menuContent.classList.remove('display-none')
    let menuBackground = document.querySelector('#menuBackground')
    menuBackground.classList.remove('display-none')
    let closeButt = document.querySelector('.closeButton')
    closeButt.classList.remove('display-none')
    let menuButton = document.querySelectorAll('.dropdowns')
    menuButton.forEach((item)=>{
        item.classList.remove('display-none')
    })
})

let menuLink = document.querySelectorAll('.dropdowns')

menuLink.forEach((item)=>{
    item.addEventListener('click',()=>{
        let menuBackground = document.querySelector('#menuBackground')
        menuBackground.classList.add('display-none')
        let menuContent = document.querySelector('#menuContent')
        menuContent.classList.add('display-none')
        let menuButton = document.querySelectorAll('.dropdowns')
        menuButton.forEach((item)=>{
            item.classList.add('display-none')
        })
    })
})