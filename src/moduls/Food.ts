// 食物类
class Food {

    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素，赋值给element
        this.element = document.getElementById('food')!
    }

    // 获取食物的x轴
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物的y轴
    get Y() {
        return this.element.offsetTop
    }

    // 随机改变食物的位置
    change() {
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food

// test代码
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
// console.log(food.X, food.Y)

