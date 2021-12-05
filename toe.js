let resetButton = document.querySelector(".restartBtn")
var options = document.querySelector('.container')
var boxZero = document.querySelector('.box0')
var boxOne = document.querySelector('.box1')
var boxTwo = document.querySelector('.box2')
var boxThree = document.querySelector('.box3')
var boxFour = document.querySelector('.box4')
var boxFive = document.querySelector('.box5')
var boxSix = document.querySelector('.box6')
var boxSeven = document.querySelector('.box7')
var boxEight = document.querySelector('.box8')
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var player1 = '1'
var player2 = '9'
var counter = 0;
var winner = document.querySelector('.result')

function playerClick(event) {

    var eventTarget = event.target

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
        console.log('player one wins')
    
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
        console.log('player two wins')
    }
    if (counter == 9) {
        showModal();
        winner.innerHTML = 'Its a draw!'
        console.log('its a draw')
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
