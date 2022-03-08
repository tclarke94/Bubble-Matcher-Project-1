//12 divs laid out, 6 matching images divided between them
//when clicked, divs change from blank 'back' of card to image that is 'hidden'
//if two images are clicked and match, they stay displayed
//if images do not match, they flip back over
//once all images are selected and matched a win message appears
//restart button should randomize the image assortment


//defines variables
let hiddenImage = document.querySelectorAll('.hiddenImage');
let turn = ''
console.log(hiddenImage)

let green = document.querySelectorAll('.green')
let blue = document.querySelectorAll('.blue')
let red = document.querySelectorAll('.red')
let yellow = document.querySelectorAll('.yellow')
let purple = document.querySelectorAll('.purple')
let orange = document.querySelectorAll('.orange')



//functions for each color class to display
function colorGreen(){
    for(let i=0; i < green.length; i++)
    green[i].addEventListener('click',function (){
       console.log('ppp')

green[i].style.backgroundColor = '#4daf7c'
        
    })
}

colorGreen()

function colorBlue(){
    for(let i=0; i < blue.length; i++)

    blue[i].addEventListener('click', function (){
        blue[i].style.backgroundColor = '#2c82c9'
    })
}
colorBlue()


function colorRed(){
    for(let i=0; i < red.length; i++)

    red[i].addEventListener('click', function (){
        red[i].style.backgroundColor = '#96281b'
    })
}
colorRed()


function colorYellow(){
    for(let i=0; i < yellow.length; i++)

    yellow[i].addEventListener('click', function (){
        yellow[i].style.backgroundColor = '#f7ca18'
    })
}
colorYellow()

function colorpurple(){
    for(let i=0; i < purple.length; i++)

    purple[i].addEventListener('click', function (){
        purple[i].style.backgroundColor = '#a537fd'
    })
}
colorpurple()

function colorOrange(){
    for(let i=0; i < orange.length; i++)

    orange[i].addEventListener('click', function (){
        orange[i].style.backgroundColor = '#d35400'
    })
}
colorOrange()




// function imageFlip(){
//     // event.preventDefault()

//     hiddenImage.addEventListener('click', ()=>{
//         console.log('ok')
//     })
    

// }
// imageFlip()

//random color generator function, may not use
// function randomNum(){
// let a = Math.floor(Math.random() * 256)

// }

// function randomColor(){
//     let b =randomNum(360);
//     const c =randomNum(100);
//     const d =randomNum(100);
//     return `bcd (${b}deg, ${c}%, ${d}%)`
// }

// function randomPastel(){
//     const b = randomColor(360);
//     return `bcd(${b}deg, 100%, 90%)`;
// }

//This displays a color or image on the div when clicked
function imageFlip(){
for(let i=0; i < hiddenImage.length; i++)

hiddenImage[i].addEventListener('click', function () {
    // if(hiddenImage==='click'){
hiddenImage[i].style.backgroundColor = 'green'
    console.log('ok')
    })}
    // if(hiddenImage.innerHTML === ''){
    //     hiddenImage.style.color = 'purple';

    




// imageFlip()




//I need only squares that are equal to remain face up when clicked. non matching 
//squares need to flip back over