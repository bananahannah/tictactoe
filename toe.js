let resetButton = document.querySelector(".restartBtn")
let gameStatus = true;
var options = document.querySelector('#options')

var boxZero = document.querySelector('.box0')
var boxOne = document.querySelector('.box1')
var boxTwo = document.querySelector('.box2')
var boxThree = document.querySelector('.box3')
var boxFour = document.querySelector('.box4')
var boxFive = document.querySelector('.box5')
var boxSix = document.querySelector('.box6')
var boxSeven = document.querySelector('.box7')
var boxEight = document.querySelector('.box8')


var counter = 0;

function playerClick(event) {

    var eventTarget = event.target

    if (eventTarget.textContent == '') { 
        if (counter % 2 == 0 ){ 
            eventTarget.textContent = 'x'
        } else {
            eventTarget.textContent = 'o'
        }  
        counter++;
    }
}

options.addEventListener('click', playerClick)




function results() {

    if (player1 === boxZero == 'x' && boxOne == 'x' && boxTwo =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green';
    }

    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
            boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (player1 === boxZero == 'x' && boxOne == 'x' && boxTwo =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
            boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (player1 === boxZero == 'x' && boxOne == 'x' && boxTwo =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
        boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
    if (boxThree == 'x' && boxFour == 'x' && boxFive =='x') {
            boxZero.style.backgroundColor && boxOne.style.backgroundColor && boxTwo.style.backgroundColor == 'green'
    }
}
    
//changes player turns
        // if (currentPlayer = currentPlayer == "x" ? "o" : "x");





// var boxOne = document.querySelector('.box1')
// var boxTwo = document.querySelector('.box2')
// var boxThree = document.querySelector('.box3')


// function redBox(event){
//     console.log(event.target)
//     var eventTarget = event.target;
//         if(eventTarget.style.backgroundColor == '') {
//         eventTarget.style.backgroundColor = 'red';
//         if(boxOne.style.backgroundColor == 'red' && boxTwo.style.backgroundColor == 'red' && boxThree.style.backgroundColor == 'red') {
//         boxOne.style.backgroundColor = 'green', boxTwo.style.backgroundColor = 'green', boxThree.style.backgroundColor = 'green';
//          }
//     }
// }

// console.log(boxOne)
// console.log(boxTwo)
// console.log(boxThree)