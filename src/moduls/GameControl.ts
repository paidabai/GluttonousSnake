import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的类
class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 储存按下键盘的key
    direction: string = ''

    // 记录游戏是否结束
    isLive = true

    top: HTMLElement
    down: HTMLElement
    left: HTMLElement
    right: HTMLElement

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.top = document.getElementById('top')!
        this.down = document.getElementById('down')!
        this.left = document.getElementById('left')!
        this.right = document.getElementById('right')!
        this.init()
    }

    // 初始化游戏，调用后开始游戏
    init = () => {
        document.addEventListener('keydown',this.keydownHandler)
        window.onload = () => {
            this.top.addEventListener('click', () => {
                this.direction = 'ArrowUp'
                document.getElementById('start')!.style.display = 'none'
            })
            this.down.addEventListener('click', () => {
                this.direction = 'ArrowDown'
                document.getElementById('start')!.style.display = 'none'
            })
            this.left.addEventListener('click', () => {
                this.direction = 'ArrowLeft'
                document.getElementById('start')!.style.display = 'none'
            })
            this.right.addEventListener('click', () => {
                this.direction = 'ArrowRight'
                document.getElementById('start')!.style.display = 'none'
            })
        }
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
         document.getElementById('start')!.style.display = 'none'
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

        // 判断蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            document.getElementById('end')!.style.display = 'block'
            this.isLive = false
        }

        this.isLive && setTimeout(() => {
            this.run()
        },300 - (this.scorePanel.level - 1) * 30)

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