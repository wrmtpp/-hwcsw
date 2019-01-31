var mul = require('./mul.js')
var grade = require('./grade.js')
var area = require('./area.js')
var dollar = require('./dollar.js')
var year = require('./year.js')

var i = 1
let stdin = process.openStdin()
console.log('Enter Value for Cal Multiply : ')

stdin.addListener('data', temp => {
	if (i == 1) {
		mul.calMul(temp)

		console.log('\n_________________________________\n')
		console.log('Enter Your Score : ')
	} else if (i == 2) {
		console.log('Your Grade is ' + grade.avg(temp))
		console.log('')
		console.log('\n_________________________________\n')
		console.log('Enter your Radius : ')
	} else if (i == 3) {
		console.log('Area of Circle is ', area.calArea(temp))
		console.log('\n_________________________________\n')
		console.log('Enter your Money(baht)')
	} else if (i == 4) {
		console.log('Your Dollar is ', dollar.calMoney(temp), ' $')
		console.log('\n_________________________________\n')
		console.log('Enter your BirthYear(A.D.) ค.ศ. : ')
	} else if (i == 5) {
		console.log('Your age is : ', year.calYear(temp))

		stdin.destroy()
	}

	i++
})