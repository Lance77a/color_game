let numSquares = 6;
let colors = [];
let pickedColor;
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let header = document.querySelector("#header");
let colorDisplay = document.getElementById("colorDisplay");
let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");

resetButton.addEventListener("click", () => {
    colorGame.reset();
 });

const colorGame = {
    initiate: function () {
        this.setupModeButtons();
        this.setupSquares();
        this.reset();
    },

    reset: function () {
        colors = this.generateRandomColors(numSquares);
        pickedColor = colorGame.pickColor();
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
        header.style.backgroundColor = "steelblue";
    },

    changeColors: function (color) {
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
    },

    pickColor: function () {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    },

    generateRandomColors: function (num) {
            var arr = []
            for(var i = 0; i < num; i++){
                arr.push(this.randomColor());
            }
        return arr;
    },

    randomColor: function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    },

    setupModeButtons: function () {
            for(var i = 0; i < modeButtons.length; i++){
                modeButtons[i].addEventListener("click", function(){
                    modeButtons[0].classList.remove("selected");
                    modeButtons[1].classList.remove("selected");
                    this.classList.add("selected");
                    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
                    colorGame.reset();
                });
            }
        },

    setupSquares: function () {
        for(var i = 0; i < squares.length; i++){
            squares[i].addEventListener("click", function(){
                var clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                    colorGame.changeColors(clickedColor);
                    header.style.backgroundColor = clickedColor;
                }  else {
                        this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try Again"
                }
            });
        }
    }
}

colorGame.initiate();