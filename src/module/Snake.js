export class Snake {
    constructor(cellSize){
        this.cellSize = cellSize;
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
            cx.rect(this.body[i].x * this.cellSize, this.body[i].y * this.cellSize,
                this.cellSize, this.cellSize);
            cx.fill();
        }
        cx.restore();
    }

    update(){
        this.x += this.xSpeed;
        if (this.x < 0){
            this.x = this.cellSize - 1;
        }
        if (this.x > this.cellSize - 1){
            this.x = 0;
        }

        this.y += this.ySpeed;
        if (this.y < 0){
            this.y = this.cellSize - 1;
        }
        if (this.y > this.cellSize - 1){
            this.y = 0;
        }

        if (this.ownCollision()){
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