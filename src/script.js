function draw_grid(cx){
    cx.save();
    cx.strokeStyle = "#82a1bb";
    cx.lineWidth = 0.5;
    let width = CANVAS_WIDTH;
    let height = CANVAS_HEIGHT;
    let minor = CELL_SIZE;

    for (let x = 0; x <= width; x += minor){
        cx.beginPath();
        cx.moveTo(x, 0);
        cx.lineTo(x, height);
        cx.stroke();
    }

    for (let y = 0; y <= height; y += minor){
        cx.beginPath();
        cx.moveTo(0, y);
        cx.lineTo(width, y);
        cx.stroke();
    }
    cx.restore();
}

class Apple {
    constructor(){
        this.x = 0;
        this.y = 0;
    }

    draw(cx){
        cx.save();
        cx.fillStyle = "red";
        cx.beginPath();
        cx.rect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        cx.fill();
        cx.restore();
    }

    createPos(){
        const randomPos = () => {return Math.floor(Math.random() * CELL_SIZE)};
        this.x = randomPos();
        this.y = randomPos();        
    }

    posControl(snakePos){
        //Elmanın yılanın üzerinde çıkması halinde yeni pozisyon
        //bulunmasını sağlar.Özyinelemeli çalılır.
        this.createPos();
        for (let pos of snakePos){
            if (pos.x == this.x && pos.y == this.y){
                this.posControl(snakePos);
                break;
            }
        }
    }
}

class Snake {
    constructor(){
        this.tail = 2;
        this.x = 10;
        this.y = 10;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.body = [
            {x : this.x, y : this.y},
            {x : this.x, y : this.y}
        ];
    }

    draw(cx){
        cx.save();
        cx.fillStyle = "yellow";
        for (let i = 0; i < this.tail; i++){
            //cx.beginPath();
            cx.rect(this.body[i].x * CELL_SIZE, this.body[i].y * CELL_SIZE,
                CELL_SIZE, CELL_SIZE);
            cx.fill();
        }
        cx.restore();
    }

    update(){
        this.x += this.xSpeed;
        if (this.x < 0){
            this.x = CELL_SIZE - 1;
        }
        if (this.x > CELL_SIZE - 1){
            this.x = 0;
        }

        this.y += this.ySpeed;
        if (this.y < 0){
            this.y = CELL_SIZE - 1;
        }
        if (this.y > CELL_SIZE - 1){
            this.y = 0;
        }

        if (this.ownCollision()){
            showMessage();
            scoreText(this.tail - 2);
            return;
        }
        
        this.body.push({x : this.x, y : this.y});
        while (this.body.length > this.tail){
            this.body.shift();
        }
    }

    ownCollision(){
        for (let i = 0; i < this.tail - 1; i++){
            if (this.x == this.body[i].x && this.y == this.body[i].y){
                this.restart();
                return true;
            }
        }
    }

    keyPush(key){
        switch (key){
            case "ArrowLeft":
                if (this.xSpeed != 1){
                    this.xSpeed = -1;
                    this.ySpeed = 0;
                }
                break;
            case "ArrowRight":
                if (this.xSpeed != -1){
                    this.xSpeed = 1;
                    this.ySpeed = 0;
                }
                break;
            case "ArrowUp":
                if (this.ySpeed != 1){
                    this.xSpeed = 0;
                    this.ySpeed = -1;
                }    
                break;
            case "ArrowDown":
                if (this.ySpeed != -1){
                    this.xSpeed = 0;
                    this.ySpeed = 1;
                }
                break;
        }
    }

    restart(){
        this.tail = 2;
        this.x = 10;
        this.y = 10;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.body = [
            {x : this.x, y : this.y},
            {x : this.x, y : this.y}
        ];
    }
}

function collisionControl(snakeObject, appleObject){
    //Apple ve Snake çarpışmasını kontrol eder
    if (snakeObject.x == appleObject.x && snakeObject.y == appleObject.y){
        snakeObject.tail++;
        appleObject.posControl(snakeObject.body);
        scoreText(snakeObject.tail - 2);
    }
}

function scoreText(score){
    const scoreNode = document.getElementById("score");
    const bestNode = document.getElementById("best-score");

    scoreNode.innerText = `Score : ${score}`;

    if (score > bestScore){
        bestScore = score;
        localStorage.setItem("best_score", bestScore);
    }

    bestNode.innerText = `Best Score : ${bestScore}`;
}

function showMessage(){
    const node = document.getElementById("restart");
    node.innerText = "Restart";
    setInterval(() => node.innerText = "", 3000);
}

function frame(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    snake.update();
    snake.draw(context);
    apple.draw(context);
    collisionControl(snake, apple);
    draw_grid(context);
}

const context = document.querySelector("canvas").getContext("2d");

const CANVAS_WIDTH = context.canvas.width;
const CANVAS_HEIGHT = context.canvas.height;
const CELL_SIZE = 20;


const snake = new Snake();
const apple = new Apple();
apple.posControl(snake.body);

let bestScore = localStorage.getItem("best_score") || 0;
scoreText(snake.tail - 2);

document.addEventListener("keydown", event => {
    snake.keyPush(event.key);
});

setInterval(frame, 1000 / 10);

