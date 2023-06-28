import './less/index.less'

// Your code goes here!

//load
window.addEventListener('load', event =>{
    console.log(`it is ${event.type}ing`);

    const heading = document.querySelector('h1')
// copy
    window.addEventListener('copy', ()=>{
    navigator.clipboard.readText()
    .then(text =>{
        heading.textContent += text
        })
    })
// click
    document.body.addEventListener('click', event =>{
        event.target.classList.toggle('mirror')
        
    })
    //double click
    document.body.addEventListener('dblclick', event =>{
        event.target.innerHTML = ''
    })
    //keydown
    window.addEventListener('keydown', event =>{
        if(event.key==6){
            document.body.innerHTML = '<h1> you ran order 66 </h1>'
        }
    })
    //mousemove
    document.body.addEventListener('mousemove', event => {
      const {clientX, clientY} = event
    //   console.log(`mouse is at ${clientX}, ${clientY}`)

    })
    // mouse enter and mouse leave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations ) {
        destination.addEventListener('mouseenter', event =>{
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', event =>{
            destination.style.fontWeight = 'initial'
        })
    }
})