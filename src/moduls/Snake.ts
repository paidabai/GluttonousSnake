class Snake{

    // 蛇头元素
    head: HTMLElement
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection
    // 获取蛇的容器节点
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇的坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇的坐标
    set X(value) {

        // 新值和旧值相同不修改
        if (this.X === value) return

        // X范围0-290
        if (value < 0 || value > 290) throw new Error('游戏结束')

        // 在修改X值时，是控制蛇的左右移动，控制蛇不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果掉头了继续反方向前进
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'
    }

    set Y(value){

        if (this.Y === value) return

        // Y范围0-290
        if (value < 0 || value > 290) throw new Error('游戏结束')

        // 在修改Y值时，是控制蛇的上下移动，控制蛇不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果掉头了继续反方向前进
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top = value + 'px'
    }

    // 添加蛇身体的方法
    addSnake(){
        /*
         element.insertAdjacentHTML(position,text)
         position 属性：
             'beforebegin'：元素element自己的前面。
             'afterbegin'：插入到元素element里面的第一个子节点之前
             'beforeend'：插入元素element里面的最后一个子节点之后
             'afterend'：元素element自己的后面。
          next：
              要插入的HTML语句，或者是XML形式也行，插入到DOM树中DOMString中
              可以是字符串形式，也可以用ES6新增的模板字符串的形式
        */
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 蛇的身体移动
    moveBody() {
        // 将最后的身体位置设置为前一个身体的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 设置到当前的身体
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}

export default Snake