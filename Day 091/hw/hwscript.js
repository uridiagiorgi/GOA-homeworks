function calculateBMI() {
    
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let result = document.getElementById('bmi') 
    
    weight = parseFloat(weight)
    height = parseFloat(height)
    
    height = height / 100
    let bmi = weight / (height * height)
    let weightgroup = "";

    if (bmi < 18.5) {
        weightgroup = "Underweight";
    } else if (bmi < 25) {
        weightgroup = "Normal weight";
    } else if (bmi < 30) {
        weightgroup = "Overweight";
    } else if (bmi < 35) {
        weightgroup = "Obese";
    } else {
        weightgroup = "Extremely obese";
    }
  
    document.getElementById("result").textContent = "Your BMI is: " + bmi + " (" + weightgroup + ")";
  }