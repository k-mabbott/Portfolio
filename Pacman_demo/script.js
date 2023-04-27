// 1 have js display world 
// 2 have pacman move
// 3 eat coin // add score
// dont go through walls

let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,1,1,2,2,1,2,2,1,1,1,1,2,2,1,2,2,1,1,2],
    [2,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2],
    [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]
var ghost = {
    x: 24,
    y: 8
}

var pacman = {
    x: 1,
    y: 1
}

var score = 0


function displayWorld (){
    var output = '';
    for (var i = 0; i<world.length; i++){
        output += '\n<div class ="row">\n'
        for (var j = 0; j<world[i].length; j++){
            if(world[i][j] == 4){
                output += "<div class='ghost'></div>";
                }
            if(world[i][j] == 3){
                output += "<div class='cherry'></div>";
                }
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
                }
            else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
                }
            if(world[i][j] == 0){
                output += "<div class='empty'></div>";
                }
        }
        output += '\n</div>'
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output
}

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20+'px';
    document.getElementById('pacman').style.top = pacman.y*24+'px';
    
}
function displayGhost(){
    document.getElementById('ghost').style.left = ghost.x*20+'px';
    document.getElementById('ghost').style.top = ghost.y*24+'px';
}

function displayScore(){
    document.getElementById('score').innerHTML = score
}

function displayGameOver(){
    document.getElementById('game').innerHTML = `<button onclick="startGame()">restart</button><h3> Your Score Was ${score} </h3>`
}

function startGame(){
    document.getElementById('game').innerHTML =`<div id="world"></div>
                                                <div id="pacman"></div>
                                                <div id="ghost"></div>
                                                <div id="score">0</div>`
    displayWorld()
    pacman.x = 1;
    pacman.y = 1;
    displayPacman()
    ghost.x = 24;
    ghost.y = 8;
    displayGhost()
}

setInterval(moveGhost, 350)

function moveGhost(){
    if (ghost.y < pacman.y && world[ghost.y+1][ghost.x] != 2){
        ghost.y++
        displayGhost()
    }
    else if (ghost.x < pacman.x && world[ghost.y][ghost.x+1] != 2){
        ghost.x++
        displayGhost()
    }
    else if (ghost.y > pacman.y && world[ghost.y-1][ghost.x] != 2 ){
        ghost.y--
        displayGhost()
    }
    else if (ghost.x > pacman.x && world[ghost.y][ghost.x-1] != 2){
        ghost.x--
        displayGhost()
    }
    if(pacman.y === ghost.y && pacman.x === ghost.x){
        displayGameOver()
    }
}


document.onkeydown = function(e){
    if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(90deg)"
        pacman.y++
        displayPacman()
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        document.getElementById('pacman').style.transform = "rotate(0deg)"
        pacman.x++
        displayPacman()
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 ){
        document.getElementById('pacman').style.transform = "rotate(270deg)"
        pacman.y--
        displayPacman()
    }
    else if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        document.getElementById('pacman').style.transform = "rotate(180deg)"
        pacman.x--
        displayPacman()
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10
        displayWorld()
        displayScore()
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score += 50
        displayWorld()
        displayScore()
    }
    displayPacman()

    console.log(e.keyCode)
}

