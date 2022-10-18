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
        this.head.style.left = value + 'px'
    }

    set Y(value){
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
}

export default Snake