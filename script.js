//12 divs laid out, 6 matching images divided between them
//when clicked, divs change from blank 'back' of card to image that is 'hidden'
//if two images are clicked and match, they stay displayed
//if images do not match, they flip back over
//once all images are selected and matched a win message appears
//restart button should randomize the image assortment

hiddenImage = document.querySelectorAll('.hiddenImage')
let turn = ''
console.log(hiddenImage)

// function imageFlip(){
//     // event.preventDefault()

//     hiddenImage.addEventListener('click', ()=>{
//         console.log('ok')
//     })
    

// }
// imageFlip()
for(let i=0; i < hiddenImage.length; i++)
hiddenImage[i].addEventListener('click', ()=>{
    console.log('ok')
    if(turn === '' && hiddenImage.innerHTML === '')
        hiddenImage.classList.add('red')

    
})