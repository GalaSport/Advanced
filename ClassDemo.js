class Circle{
    constructor(r){
        this.radius = r;
       
    }
}
const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radius);

const yourCircle = new Circle(3);
console.log(yourCircle);
console.log(yourCircle.radius);

class Cat{
    constructor(name, age, mom){
        this.name = name;
        this.age = age;
        this.mom = mom;
    }
}
const firstCat = new Cat("Mata", 7, "Gala");
console.log(firstCat);
console.log(firstCat.name);
console.log(firstCat.age);
console.log(firstCat.mom);

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}
const myRectangle = new Rectangle(3, 5);
console.log(myRectangle);
console.log(myRectangle.calcArea());

const yourRectangle = new Rectangle(2, 5);
console.log(yourRectangle);
console.log(yourRectangle.calcArea());