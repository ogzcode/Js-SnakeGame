import { Apple } from "./Apple.js";
import { Snake } from "./Snake.js";


export class Game {
    constructor(cx){
        this.context = cx;

        this.CANVAS_WIDTH = this.context.canvas.width;
        this.CANVAS_HEIGHT = this.context.canvas.height;
        this.CELL_SIZE = 20;

        this.snake = new Snake(this.CELL_SIZE);
        this.apple = new Apple(this.CELL_SIZE);
        this.apple.posControl(this.snake.body);

        this.bestScore = localStorage.getItem("best_score") || 0;
        this.scoreText(this.snake.tail - 2);

        document.addEventListener("keydown", event => {
            this.snake.keyPush(event.key);
        });
    }

    draw_grid(){
        this.context.save();
        this.context.strokeStyle = "#82a1bb";
        this.context.lineWidth = 0.5;
        let width = this.CANVAS_WIDTH;
        let height = this.CANVAS_HEIGHT;
        let minor = this.CELL_SIZE;
    
        for (let x = 0; x <= width; x += minor){
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, height);
            this.context.stroke();
        }
    
        for (let y = 0; y <= height; y += minor){
            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(width, y);
            this.context.stroke();
        }
        this.context.restore();
    }

    scoreText(score){
        const scoreNode = document.getElementById("score");
        const bestNode = document.getElementById("best-score");
    
        scoreNode.innerText = `Score : ${score}`;
    
        if (score > this.bestScore){
            this.bestScore = score;
            localStorage.setItem("best_score", this.bestScore);
        }
    
        bestNode.innerText = `Best Score : ${this.bestScore}`;
    }
    
    frame(cx){
        cx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.snake.update();
        this.snake.draw(cx);
        this.apple.draw(cx);
        this.collisionControl();
        this.draw_grid(cx);
        this.scoreText(this.snake.tail - 2);
    }

    collisionControl(){
        //Apple and Snake Collision
        if (this.snake.x == this.apple.x && this.snake.y == this.apple.y){
            this.snake.tail++;
            this.apple.posControl(this.snake.body);
        }
    }
}