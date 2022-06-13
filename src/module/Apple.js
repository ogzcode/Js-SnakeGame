export class Apple {
    constructor(cellSize){
        this.x = 0;
        this.y = 0;
        this.cellSize = cellSize; 
    }

    draw(cx){
        cx.save();
        cx.fillStyle = "red";
        cx.beginPath();
        cx.rect(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        cx.fill();
        cx.restore();
    }

    createPos(){
        const randomPos = () => {return Math.floor(Math.random() * this.cellSize)};
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