import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的类
class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 储存按下键盘的key
    direction: string = 'ArrowRight'

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 初始化游戏，调用后开始游戏
    init = () => {
        document.addEventListener('keydown',this.keydownHandler)
        this.run()
    }

    // 键盘按下的函数
     keydownHandler = (event: KeyboardEvent) => {
        /*
         ArrowUp
         ArrowDown
         ArrowLeft
         ArrowRight
        */
         this.direction = event.key
    }

    // 控制蛇的移动
    run = () => {

        let X = this.snake.X
        let Y = this.snake.Y

        // 根据this.direction保存的键盘key控制蛇
        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break
            case 'ArrowDown':
                Y += 10
                break
            case 'ArrowLeft':
                X -= 10
                break
            case 'ArrowRight':
                X += 10
                break
        }

        this.snake.X = X
        this.snake.Y = Y

        // 判断蛇是否吃到食物
        this.checkEat(X, Y)


        setTimeout(() => {
            this.run()
        },300)

    }
    // 是否吃到食物的方法
    checkEat = (X: number, Y: number) => {
        if (X === this.food.X && Y === this.food.Y) {
            // 重置食物位置
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇增加
            this.snake.addSnake()
        }
    }

}

export default GameControl