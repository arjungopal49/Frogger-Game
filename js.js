var a;
var frogUp = new Image();
frogUp.src = "resources/froggerfrog.png";
var frogRight = new Image();
frogRight.src = "resources/froggerRight.png";
var frogDown = new Image();
frogDown.src = "resources/froggerDown.png";
var frogLeft = new Image();
frogLeft.src = "resources/froggerLeft.png";
var frog = new Image();
frog.src = frogUp.src;
var frogX = 450;
var frogY = 650;
var leftBorder = false;
var rightBorder = false;
var topBorder = false;
var bottomBorder = true;
var score = 0;
var carArray = [];
var waterArray = [];
var lilyPadArray = [];
var lives = 3;
var level = 1;
function initialize() {
    level = 1;
    frogX = 450;
    frogY = 650;
    carArray = [];
    waterArray = [];
    lilyPadArray = [];
    lives = 3;
    score = 0;
    drawBackground();
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frog,frogX,frogY,50, 50);
    //push cars
    carArray.push(createCars("resources/yellowcar.png", "yellowcar", 200, 550, 3, 50));
    carArray.push(createCars("resources/yellowcar.png", "Koala2", 0, 550, 3, 50));
    carArray.push(createCars("resources/yellowcar.png", "Koala1", 700 , 600,-3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala2", 900, 600,-3, 50));
    carArray.push(createCars("resources/yellowcar.png", "yellowcar", 200, 450, 3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala2", 0, 450, 3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala1", 700 , 500,-3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala2", 900, 500,-3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala1", 700 , 400,-3,50));
    carArray.push(createCars("resources/yellowcar.png", "Koala2", 900, 400,-3,50));
    //push water items
    waterArray.push(createWaterItems("resources/Redlog2.png", "yellowcar", 200, 100, 2, 100));
    waterArray.push(createWaterItems("resources/Redlog2.png", "Koala2", 0, 100, 2, 100));
    waterArray.push(createWaterItems("resources/Redlog2.png", "yellowcar", 700, 150, -2, 100));
    waterArray.push(createWaterItems("resources/Redlog2.png", "Koala2", 900, 150, -2,100  ));
    waterArray.push(createWaterItems("resources/Redlog2.png", "yellowcar", 200, 200, 2,150));
    waterArray.push(createWaterItems("resources/Redlog2.png", "Koala2", 0, 200, 2,150));
    waterArray.push(createWaterItems("resources/Redlog2.png", "yellowcar", 700, 250, -2,150));
    waterArray.push(createWaterItems("resources/Redlog2.png", "Koala2", 900, 250, -2,150));
    waterArray.push(createWaterItems("resources/Redlog2.png", "yellowcar", 200, 300, 2,100));
    waterArray.push(createWaterItems("resources/Redlog2.png", "Koala2", 0, 300, 2,100));
    //push lilypads
    lilyPadArray.push(createLilyPads("resources/lily-pad.png", "lilypads", 0,50, 50))

}
function startAnimation() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("myCanvas").style.display = "block";
    initialize();
    animate();

}
function animate(){
    a=requestAnimationFrame(animate);
    drawBackground();
    drawCars();
    drawWaterItems();
    drawLilyPads();
    drawImage();
    checkBorder();
    showScore();
    showLives();
    nextLevel();
    checkCarCollision();
    checkWaterCollision();
    checkLilyPads()
    endGame();
}
function checkBorder() {
    if (frogY === 650) {
        bottomBorder = true;
    } else {
        bottomBorder = false;
    }
    if (frogY === 50) {
        topBorder = true;
    } else {
        topBorder = false;
    }
    if (frogX === 0) {
        leftBorder = true;
    } else {
        leftBorder = false;
    }
    if (frogX === 850) {
        rightBorder = true;
    } else {
        rightBorder = false;
    }
}

function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,window.innerWidth,50);
    if (level > 1) {
        ctx.fillStyle="#0029a1";
        ctx.fillRect(0,50,window.innerWidth,50);
    } else {
        ctx.fillStyle="#00cb18";
        ctx.fillRect(0,50,window.innerWidth,50);
    }
    ctx.fillStyle="#00cb18";
    ctx.fillRect(0,350,window.innerWidth,50);
    ctx.fillStyle="#00cb18";
    ctx.fillRect(0,650,window.innerWidth,50);

    ctx.fillStyle="#000000";
    ctx.fillRect(0,400,window.innerWidth,250);
    ctx.fillStyle="#0029a1";
    ctx.fillRect(0,100,window.innerWidth,250);

}
function drawImage() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frog,frogX,frogY,50,50);
}
function showScore() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 15,35);
}

function showLives() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 750,35);
}
function nextLevel () {
    if (level === 1) {
        if (frogY === 50) {
            score = score + 1;
            level = level + 1;
            frogX = 450;
            frogY = 650;
        }
    }
}
function endGame() {
    if (lives<0) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle="#ffffff";
        ctx.fillRect(200,200,500,300);
        ctx.fillStyle= "#ff000a";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 360,300);
        ctx.fillStyle= "#000000";
        ctx.font = "30px Arial";
        ctx.fillText("You finished with a score of " + score, 260,350);
        ctx.fillStyle= "#ff000a";
        ctx.font = "30px Arial";
        ctx.fillText("Press R to restart", 330,400);
        cancelAnimationFrame(a);
    }

}
var createCars = function(src, title,xcoord,ycoord, speed, length) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.speed = speed;
    img.length = length;
    return img;
};
var createWaterItems = function(src, title, xcoord, ycoord, speed, length) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.speed = speed;
    img.length = length;
    return img;
};
var createLilyPads = function (src, title, xcoord, ycoord, speed, length) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.speed = speed;
    img.length = length;
    return img;
}
function drawCars() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<carArray.length;i++){
        carArray[i].left+=carArray[i].speed;
        ctx.drawImage(carArray[i],carArray[i].left, carArray[i].top,carArray[i].length,50);
        if (carArray[i].speed > 0) {
            if(carArray[i].left>900) {
                carArray[i].left = -200;
            }
        }
        if(carArray[i].speed < 0) {
            if (carArray[i].left < -200) {
                carArray[i].left = 900;
            }
        }
    }
}
function drawWaterItems() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<waterArray.length;i++){
        waterArray[i].left+=waterArray[i].speed;
        ctx.drawImage(waterArray[i],waterArray[i].left, waterArray[i].top,waterArray[i].length,50);
        if (waterArray[i].speed > 0) {
            if(waterArray[i].left>900) {
                waterArray[i].left = -200;
            }
        }
        if(waterArray[i].speed < 0) {
            if (waterArray[i].left < -200) {
                waterArray[i].left = 900;
            }
        }
    }
}
function drawLilyPads() {
    if (level > 1) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        for (i = 0; i < lilyPadArray.length; i++) {
            ctx.drawImage(lilyPadArray[i], lilyPadArray[i].left, lilyPadArray[i].top, 50, 50);
        }
    }
}
function checkCarCollision() {
    for (i=0; i<carArray.length; i++) {
        if (frogX + 50 > carArray[i].left &&  frogX < carArray[i].left + carArray[i].length && frogY + 50 > carArray[i].top && frogY < carArray[i].top + 50) {
            lives = lives - 1;
            frogX = 450;
            frogY = 650;
        }
    }

}
function checkWaterCollision() {
    var onLog = false;
    var logSpeed = 0;
    for (i=0; i<waterArray.length; i++) {
        if (frogX + 50 > waterArray[i].left &&  frogX < waterArray[i].left + waterArray[i].length && frogY + 50 > waterArray[i].top && frogY < waterArray[i].top + 50) {
            onLog=true;
            logSpeed = waterArray[i].speed;
        }
    }
    if (frogY < 350 && frogY > 50) {
        if (onLog === false) {
            lives = lives - 1;
            frogX = 450;
            frogY = 650;
        } else {
            frogX = frogX + logSpeed;
        }
    }

}
function checkLilyPads() {
    if (level > 1) {
        var onPad = false;
        for (i = 0; i < lilyPadArray.length; i++) {
            if (frogX + 50 > lilyPadArray[i].left && frogX < lilyPadArray[i].left + 50 && frogY + 50 > lilyPadArray[i].top && frogY < lilyPadArray[i].top + 50) {
                onPad = true;
            }
        }
        if (frogY == 50) {
            if (onPad === false) {
                lives = lives - 1;
                frogX = 450;
                frogY = 650;
            } else {
                score = score + 1;
                level = level + 1;
                frogX = 450;
                frogY = 650;
            }
        }
    }

}
//Keypress Event code
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 37 && leftBorder === false) //left arrow
    {
        frogX-=50;
        frog.src = frogLeft.src;

    }
    if(keycode == 38 && topBorder === false)  //up arrow
    {
        frogY-=50;
        frog.src = frogUp.src;
    }
    if(keycode == 39 && rightBorder === false)  //right arrow
    {
        frogX+=50;
        frog.src = frogRight.src;
    }
    if(keycode == 40 && bottomBorder === false)  //down arrow
    {
        frogY+=50;
        frog.src = frogDown.src;
    }
    if(keycode == 87 && topBorder === false)
    {
        frogY-=50; //w key
        frog.src = frogUp.src;

    }
    if(keycode == 65 && leftBorder === false)  //a key
    {
        frogX-=50;
        frog.src = frogLeft.src;
    }
    if(keycode == 68 && rightBorder === false)  //d key
    {
        frogX+=50;
        frog.src = frogRight.src;
    }
    if(keycode == 83 && bottomBorder === false)  //s key
    {
        frogY+=50;
        frog.src = frogDown.src;
    }
    if (keycode == 82) {
        startAnimation()
    }



    //all key numbers can be found on the internet
});



