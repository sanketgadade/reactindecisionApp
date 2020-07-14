
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
      