// Declared variables
const openBtn = document.querySelector('#open-btn')
const navBar = document.querySelector('nav')
const main = document.querySelector('main')

// When page is loaded hides open button
document.addEventListener('DOMContentLoaded', function(){
    openBtn.classList.toggle('hidden')
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('bi-x-square')) {
        //Hides navbar when X is clicked 
        navBar.classList.toggle('hidden')
        
        //Creates new aside div for spacing
        let leftAside = document.createElement('aside')
        leftAside.classList.add('leftAside')
        main.prepend(leftAside)
       
        //Removes hidden class from open button
        openBtn.classList.toggle('hidden')
    } else if (event.target.classList.contains('bi-list')) {
        // Removes hidden class from nav bar
        navBar.classList.toggle('hidden')
        
        // Removes left aside div
        main.removeChild(main.childNodes[0])
        openBtn.classList.toggle('hidden')
    }
})