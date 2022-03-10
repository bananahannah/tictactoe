let resetButton = document.querySelector(".restartBtn")
let options = document.querySelector('.container')
let boxZero = document.querySelector('.box0')
let boxOne = document.querySelector('.box1')
let boxTwo = document.querySelector('.box2')
let boxThree = document.querySelector('.box3')
let boxFour = document.querySelector('.box4')
let boxFive = document.querySelector('.box5')
let boxSix = document.querySelector('.box6')
let boxSeven = document.querySelector('.box7')
let boxEight = document.querySelector('.box8')
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let player1 = '1'
let player2 = '9'
let counter = 0;
let winner = document.querySelector('.result')

function playerClick(event) {

    let eventTarget = event.target

    if (eventTarget.textContent == '') { 
        if (counter % 2 == 0 ){ 
            eventTarget.textContent = '1'
        } else {
            eventTarget.textContent = '9'
        }  
        counter++;
    }
    results();
}


options.addEventListener('click', playerClick)


function results() {
    if (boxZero.textContent == '1' && boxOne.textContent  == '1' && boxTwo.textContent  =='1' ||
    boxThree.textContent  == '1' && boxFour.textContent  == '1' && boxFive.textContent  =='1' ||
    boxSix.textContent  == '1' && boxSeven.textContent  == '1' && boxEight.textContent  =='1' ||
    boxZero.textContent  == '1' && boxFour.textContent  == '1' && boxEight.textContent  =='1' ||
    boxTwo.textContent  == '1' && boxFour.textContent  == '1' && boxSix.textContent  =='1' ||
    boxZero.textContent  == '1' && boxThree.textContent  == '1' && boxSix.textContent  =='1' ||
    boxOne.textContent  == '1' && boxFour.textContent  == '1' && boxSeven.textContent  =='1' ||
    boxTwo.textContent  == '1' && boxFive.textContent  == '1' && boxEight.textContent  =='1') {
        showModal();
        winner.innerHTML = 'PacMan Wins!'
    }  
    
    if (boxZero.textContent  == '9' && boxOne.textContent  == '9' && boxTwo.textContent  != '' ||
    boxThree.textContent  == '9' && boxFour.textContent  == '9' && boxFive.textContent  =='9' ||
    boxSix.textContent  == '9' && boxSeven.textContent  == '9' && boxEight.textContent  =='9' ||
    boxZero.textContent  == '9' && boxFour.textContent  == '9' && boxEight.textContent  =='9' ||
    boxTwo.textContent  == '9' && boxFour.textContent  == '9' && boxSix.textContent  =='9' ||
    boxZero.textContent  == '9' && boxThree.textContent  == '9' && boxSix.textContent  =='9' ||
    boxOne.textContent  == '9' && boxFour.textContent  == '9' && boxSeven.textContent  =='9' ||
    boxTwo.textContent  == '9' && boxFive.textContent  == '9' && boxEight.textContent  =='9') {
        showModal();
        winner.innerHTML = 'Ghost Wins!'
    }
    if (counter == 9) {
        showModal();
        winner.innerHTML = 'Its a draw!'
    }
}


function showModal() {

    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
}


function resetGame() {
    counter = 0;
        boxZero.textContent = ''
        boxOne.textContent = ''
        boxTwo.textContent = ''
        boxThree.textContent = ''
        boxFour.textContent = ''
        boxFive.textContent = ''
        boxSix.textContent = ''
        boxSeven.textContent =''
        boxEight.textContent = ''
        modal.style.display = "none";
}

resetButton.addEventListener('click', resetGame)
