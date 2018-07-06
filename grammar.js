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
