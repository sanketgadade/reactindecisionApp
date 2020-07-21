
class Person{
    constructor(name, age=0)
    {
        this.name=name || 'test';
        this.age=age;
        //console.log(this.name);

    }
    show()
    {
        return `this is ${this.name} and age is ${this.age} years old !`;
    }
}
class Student extends Person{

    constructor(name,age,major)
    {
      super(name,age);
      this.major=major;
    }
    hasMajor()
    {
        return !!this.major;
    }
    getDescription(){
        let desscription=super.show();
    }
}

const obj=new Student('Sanket Gadade',26,'CSE');

console.log(obj.show());

const obj1=new Student();
console.log(obj1.show());