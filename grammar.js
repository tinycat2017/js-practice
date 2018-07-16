// 阶乘递归
function factor(num){
	let realNum = parseInt(num);
	if (typeof realNum != 'number' || isNaN(realNum)) return
	if (realNum === 0){
		return 1
	} else {
		return realNum * arguments.callee(realNum - 1) // 严格模式下则不可访问callee属性
	}
}
let result = factor(9)
console.log(result);

// 字符串 slice, substr, substring
let str = 'hello'
console.log(str.slice(-3)); // 第一个参数为负数时，将参数与字符串长度相加，根据结果来选择子字符串 llo
console.log(str.substring(-3)); // 第一个参数为负数时，将参数重置为0，根据结果来选择子字符串 hello
console.log(str.substr(-3)); // 第一个参数为负数时，将参数与字符串长度相加，根据结果来选择子字符串 llo
console.log(str.slice(1,3)); // el
console.log(str.substring(1,3)); // el
console.log(str.substr(1,3)); // ell  从第一个参数开始，截取第二个参数指定的长度

// 字符串 indexOf, lastIndexOf, includes, startsWith, endsWith
let str1 = 'hello'
console.log(str1.indexOf('e', 1)); // 1 表示从字符串的第2个字符开始向后匹配
console.log(str1.lastIndexOf('e', 1)); // 1 表示从字符串的第2个字符开始向前匹配
console.log(str1.includes('el')); // true 表示是否找到了参数字符串
console.log(str1.startsWith('el')); // false 表示参数字符串是否在原字符串的头部 
console.log(str1.endsWith('el', 3)); // true 表示参数字符串是否在原字符串的前3个字符

// Math ceil,floor,round
console.log(Math.ceil(20.1)); // ceil 是向上取整
console.log(Math.ceil(20.5)); // 21
console.log(Math.ceil(20.9)); // 21

console.log(Math.floor(20.1)); // floor 是向下取整
console.log(Math.floor(20.5)); // 20
console.log(Math.floor(20.9)); // 20

console.log(Math.round(20.1)); // 20  round 是根据四舍五入取整
console.log(Math.round(20.5)); // 21
console.log(Math.round(20.9)); // 20

// 编写一个1-10的随机数生成器
let randomNum = () => {
	return Math.floor(Math.random() * 10 + 1)
}
console.log(randomNum());

// Object.defineProperties 定义多个属性
let book = {}
Object.defineProperties(book, {
	_name: {
		value: 'haha'
	},
	_year: {
		value: '2018'
	},
	_edition: {
		get() {
			return this._name + this._year
		},
		set(edition) {
			this._edition = edition
		}
	}
})
console.log(book);
// {_edition:"haha2018", _name:"haha", _year:"2018"}

// in 和 for in
function Person(name) {
	this.name = name
}
Person.prototype.age = '18'
let person1 = new Person('nicole')
console.log('age' in person1); // in 操作符判断一个属性是否在一个对象中是可访问到的

// 判断一个可访问的属性是在原型上还是在实例上
let hasPropertyInPrototype = (obj, property) => {
	return !obj.hasOwnProperty(property) && (property in obj)
}
console.log(hasPropertyInPrototype(person1, 'age')); // true
console.log(hasPropertyInPrototype(person1, 'name')); // false

// for in 能够遍历的是所有实例上的可访问的属性，并包括原型
for (property in person1){
	console.log(property);
}
// name
// age

// Object.keys 遍历当前实例，并返回这个实例的所有可访问的属性数组
console.log(Object.keys(person1)); // [ 'name' ]

// Object.getOwnPropertyNames 遍历当前实例，并返回这个实例所有的属性，包括不可枚举的
console.log(Object.getOwnPropertyNames(person1)); // [ 'name' ]
console.log(Object.getOwnPropertyNames(person1.__proto__)); // [ 'constructor', 'age' ]


function Animal() {
}
let dog = new Animal()
Animal.prototype = {
	type: 'Dog',
	age: '1'
}
//let dog = new Animal()
console.log(dog.type);



function newObj() {
	let a = 1;
	let b = 2;
	return () => {
		console.log('a is ', a);
	}
}





