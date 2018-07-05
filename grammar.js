// 阶乘递归
function factor(num){
	if (num === 0){
		return 1
	} else {
		return num * arguments.callee(num - 1)
	}
}

let result = factor(5)
console.log(result);