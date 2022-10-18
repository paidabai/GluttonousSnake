// 记分牌类
class ScorePanel {
    // 分数&等级
    score = 0
    level = 1
    // 分数和等级节点
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 定义最大的等级
    maxLevel: number
    // 定义多少分数时提升等级
    upScore: number

    // 构造函数 设置maxLevel的默认值为10,upScored的默认值为10
    constructor(maxLevel: number = 10, upScore: number = 5) {
        this.levelEle = document.getElementById('level')!
        this.scoreEle = document.getElementById('score')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 加分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore == 0) this.levelUp()
    }

    // 提升等级方法
    levelUp() {
        // 小于设置的最大值才加
        if (this.level < this.maxLevel) this.levelEle.innerHTML = ++this.level + ''
    }
}

export default ScorePanel

// test 代码
// let scorePanel = new ScorePanel(100,10);
// for (let i = 0; i < 200; i++) {
//     scorePanel.addScore()
// }