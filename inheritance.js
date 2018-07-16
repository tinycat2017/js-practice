// js 的继承
// 考虑在 js 中实现继承，一般会考虑到原型链继承和构造函数继承，以及对两者的结合考虑
// 1. 原型链继承
function Animal() {
	this.type = 'Cat'
	this.name = 'Nini'
	this.hobbies = ['eat fish', 'play ball']
}
Animal.prototype.say = function () {
	console.log('type is ' + this.type + ' name is ' + this.name);
}

function Cat() {
	this.age = '1'
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

let smallCat = new Cat()
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is Cat name is Nini

let bigCat = new Cat()
console.log(bigCat.hobbies) // [ 'eat fish', 'play ball', 'sleep' ]

// 2. 构造函数继承
function Animal(type, name) {
	this.type = type
	this.name = name
	this.hobbies = ['eat fish', 'play ball']
}
function Cat(type, name) {
	Animal.call(this, type, name)
	this.age = '1'
	this.say = () => {
		console.log('type is ' + this.type + ' name is ' + this.name);
	}
}
let smallCat = new Cat('Cat', 'Nini')
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is Cat name is Nini

let bigCat = new Cat('Cat', 'Nicole')
console.log(bigCat.hobbies) // [ 'eat fish', 'play ball' ]
bigCat.say() // type is Cat name is Nicole

// 3. 组合继承 （原型链继承和构造函数继承的合体）
function Animal(type, name) {
	this.type = type
	this.name = name
	this.hobbies = ['eat fish', 'play ball']
}
Animal.prototype.say = function () {
	console.log('type is ' + this.type + ' name is ' + this.name);
}
function Cat(type, name) {
	Animal.call(this, type, name)
	this.age = '1'
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

let smallCat = new Cat('smallCat', 'Nini')
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is smallCat name is Nini

let bigCat = new Cat('bigCat', 'Nicole')
console.log(bigCat.hobbies); // [ 'eat fish', 'play ball' ]
bigCat.say() // type is bigCat name is Nicole

// 原型式继承
let Animal = {
	type: 'Cat',
	name: 'Nini',
	hobbies: ['eat fish', 'play ball']
}
function createCat(o) {
	function F() {}
	F.prototype = o
	return new F()
}

let smallCat = createCat(Animal)
let bigCat = createCat(Animal)
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
console.log(bigCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
bigCat.name = 'Nicole'
console.log(smallCat.name); // 'Nini'
console.log(bigCat.name); // 'Nicole'
console.log(bigCat.__proto__.name); // 'Nini'

// 关于原型式的更多思考
function Animal(type, name) {
	this.type = type
	this.name = name
	this.hobbies = ['eat fish', 'play ball']
}
Animal.prototype.say = function () {
	console.log('type is ' + this.type + ' name is ' + this.name);
}
function createCat(o) {
	function F() {}
	F.prototype = o
	return new F()
}

let smallCat = createCat(new Animal('smallCat', 'Nini'))
let bigCat = createCat(new Animal('bigCat', 'Nicole'))
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
console.log(bigCat.hobbies); // [ 'eat fish', 'play ball' ]

// 寄生式继承
function createCat(o) {
	let cloneObj = Object.create(o)
	cloneObj.say = function (){
		console.log('type is ' + this.type + ' name is ' + this.name);
	}
	return cloneObj
}

let Animal = {
	type: 'Cat',
	name: 'Nini',
	hobbies: ['eat fish', 'play ball']
}

let smallCat = createCat(Animal)
let bigCat = createCat(Animal)
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
console.log(bigCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is Cat name is Nini
bigCat.say() // type is Cat name is Nini

// 寄生组合式继承
function Animal(type, name) {
	this.type = type
	this.name = name
	this.hobbies = ['eat fish', 'play ball']
}
Animal.prototype.say = function () {
	console.log('type is ' + this.type + ' name is ' + this.name);
}
function Cat(type, name) {
	Animal.call(this, type, name)
	this.age = '1'
}

function createObj(child, parent) {
	let prototype = Object.create(parent.prototype)
	prototype.constructor = child
	child.prototype = prototype
}
createObj(Cat, Animal)

let smallCat = new Cat('smallCat', 'Nini')
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is smallCat name is Nini

let bigCat = new Cat('bigCat', 'Nicole')
console.log(bigCat.hobbies); // [ 'eat fish', 'play ball' ]
bigCat.say() // type is bigCat name is Nicole




