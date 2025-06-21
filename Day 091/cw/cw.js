let weight = Number(prompt('Enter your weight (in kg): '))
let height = Number(prompt('Enter your height (in cm): '))
height = height / 100
let bmi = weight / (height * height)
if (bmi < 18.5) {
    console.log('Underweight')
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log('Normal')
} else if (bmi >= 25 && bmi < 29.9) {
    console.log('Overweight')
} else if (bmi >= 30 && bmi < 34.9) {
    console.log('Obese')
} else {
    console.log('Extremely Obese')
}