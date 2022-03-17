//12 divs laid out, 6 matching images divided between them
//when clicked, divs change from blank 'back' of card to image that is 'hidden'
//if two images are clicked and match, they stay displayed
//if images do not match, they flip back over
//once all images are selected and matched a win message appears
//restart button should randomize the image assortment


//defines variables
let hiddenImage = document.querySelectorAll('.hiddenImage');
let turn = ''
// console.log(hiddenImage)

green = document.querySelectorAll('.green')
blue = document.querySelectorAll('.blue')
red = document.querySelectorAll('.red')
yellow = document.querySelectorAll('.yellow')
purple = document.querySelectorAll('.purple')
orange = document.querySelectorAll('.orange')

var colors = [[green],[blue],[red],[yellow],[purple],[orange]]
var cards = []

var guess1 = '';
var guess2 = '';
var count = 0;
// var colors = [
// [green = document.querySelectorAll('.green')],
// [blue = document.querySelectorAll('.blue')],
// [red = document.querySelectorAll('.red')],
// [yellow = document.querySelectorAll('.yellow')],
// [purple = document.querySelectorAll('.purple')],
// [orange = document.querySelectorAll('.orange')],
// ]

function blah(){
if(colors[0].innerHTML == colors[1].innerHTML && hiddenImage[0].innerHTML !== hiddenImage[1].innerHTML){
    alert('match')
}
//     let firstCard = colors[0];
// let secondCard = colors[1];
// for(let i = 0; i < colors.length;i++)
// colors.addEventListener('click', function (){
//    if(colors[0] === colors[1] && firstCard !== secondCard)
 
//     console.log(`match`)
// })
}

blah()

//functions for each color class to display
function colorGreen(){
    for(let i=0; i < green.length; i++)
    green[i].addEventListener('click',function (){
      

green[i].style.backgroundColor = '#4daf7c'
        
    })
}

// colorGreen()

function colorBlue(){
    for(let i=0; i < blue.length; i++)

    blue[i].addEventListener('click', function (){
        blue[i].style.backgroundColor = '#2c82c9'
    })
}
// colorBlue()


function colorRed(){
    for(let i=0; i < red.length; i++)

    red[i].addEventListener('click', function (){
        red[i].style.backgroundColor = '#96281b'
    })
}
// colorRed()


function colorYellow(){
    for(let i=0; i < yellow.length; i++)

    yellow[i].addEventListener('click', function (){
        yellow[i].style.backgroundColor = '#f7ca18'
    })
}
// colorYellow()

function colorPurple(){
    for(let i=0; i < purple.length; i++)

    purple[i].addEventListener('click', function (){
        purple[i].style.backgroundColor = '#a537fd'
    })
}
// colorPurple()

function colorOrange(){
    for(let i=0; i < orange.length; i++)

    orange[i].addEventListener('click', function (){
        orange[i].style.backgroundColor = '#d35400'
    })
}
// colorOrange()

function colorRunner(){
    colorGreen()
    colorBlue()
    colorRed()
    colorYellow()
    colorPurple()
    colorOrange()
    // console.log('success')
}

colorRunner()


// function imageFlip(){
//     // event.preventDefault()

//     hiddenImage.addEventListener('click', ()=>{
//         console.log('ok')
//     })
    

// }
// imageFlip()


//This displays a color or image on the div when clicked
// function imageFlip(){
// for(let i=0; i < hiddenImage.length; i++)

// hiddenImage[i].addEventListener('click', function () {
    // if(hiddenImage==='click'){
//  if(hiddenImage[i].style.backgroundColor !== hiddenImage[i].style.backgroundColor )
//     console.log('same')
// else{
//     (console.log('not same'))
// }    
// })}
    // if(hiddenImage.innerHTML === ''){
    //     hiddenImage.style.color = 'purple';

    




// imageFlip()




//I need only squares that are equal to remain face up when clicked. non matching 
//squares need to flip back over

//this will tell me if a green div has been clicked. I may use this to check all colors indivudually.

//this is supposed to check all colors that are clicked but doesnt work
// function colorChecker2(){
//     for(let j=0; j == 12; j++)
//     colors.addEventListener('click', () =>{
//         console.log('sko')
//         if(colors === colors){
//             console.log('they match')
//         }
//     })

// }
// colorChecker2()


//these check which color is clicked and return the color
function greenChecker(){
    for(let i=0; i < green.length; i++)
    green[i].addEventListener('click', function (){
        if(green === green){
            console.log('its green')
   
                }
            }
        
        
    )}
// greenChecker()



function blueChecker(){
    for(let i=0; i < blue.length; i++)
    blue[i].addEventListener('click', function (){
        if(blue === blue){
            console.log('its blue')
   
                }
            }
        
        
    )}
// blueChecker()

function redChecker(){
    for(let i=0; i < red.length; i++)
    red[i].addEventListener('click', function (){
        if(red === red){
            console.log('its red')
   
                }
            }
        
        
    )}
// redChecker()

function yellowChecker(){
    for(let i=0; i < yellow.length; i++)
    yellow[i].addEventListener('click', function (){
        if(yellow === yellow){
            console.log('its yellow')
   
                }
            }
        
        
    )}
// yellowChecker()

function purpleChecker(){
    for(let i=0; i < purple.length; i++)
    purple[i].addEventListener('click', function (){
        if(purple === purple){
            console.log('its purple')
   
                }
            }
        
        
    )}
// purpleChecker()

function orangeChecker(){
    for(let i=0; i < orange.length; i++)
    orange[i].addEventListener('click', function (){
if(orange[i] === orange[i]){
            console.log('its orange')
}else{
                console.log('it is not orange')
        
    
           
            
        
        
        }})}
// orangeChecker()


function colorChecker(){
    greenChecker()
    blueChecker()
    redChecker()
    yellowChecker()
    purpleChecker()
    orangeChecker()
}

colorChecker()

function match(){
    let firstCard = colors[0];
let secondCard = colors[1];
    if(colorChecker(hiddenImage[0].innerHTML === hiddenImage[1].innerHTML && firstCard !== secondCard)){
        alert('match')
    }
}
// match()
// function doubleCheck(){
//     for(let i=0;i<colors.length;i++)
//     colors.addEventListener('click', ()=>{
//     if (colors  ){
//         console.log('same color')

//     }
// })}
// doubleCheck()


//if both clicked divs have matching classes(colors) this should say they match

function matcher(){
//    var color1 = document.getElementsByClassName('blue')
//    var color2 =document.getElementsByClassName('blue')
//    var x = color1.isEqualNode(color2);
//    document.getElementsByClassName('blue').innerHTML = x;
// for(let i=0;i<colors.length;i++)
// if(colors[i] !== colors[i]){
// console.log('not match')

// }
let firstCard = colors[0]
let secondCard = colors[1]
if (hiddenImage[0].innerText === hiddenImage[1].innerText && firstCard !== secondCard){
    alert ('match')
}
}

// matcher()

// let cardsId = [];
// let cardSelect = [];
// let cardsWon = 0;
// let clicks = 0;


// function checkMatches(){
// let firstCard = colors[0];
// let secondCard = colors[1];
// if (colors[0] === colors[1] && firstCard !== secondCard){
//     alert('match')
// }
// }

// checkMatches()