function generateRandomName(){

}

function SayMyName(mysecretcode) {
    let myname = document.getElementById("myName").value;
    console.log(myname);
    alert(`Hi ${myname} - ${mysecretcode}`);
  }

  function calculate(operation) {
    // Get input values
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
    
    // Validate input
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers");
      return;}
    }

  let result;
  try {
    // Perform calculation based on selected operation
    switch (operation) {
      case 'add':
        result = add(number1, number2);
        break;
      case 'subtract':
        result = subtract(number1, number2);
        break;
      case 'multiply':
        result = multiply(number1, number2);
        break;
      case 'divide':
        result = divide(number1, number2);
        break;
      default:
        throw new Error("Invalid operation");
    }
    
// Display result
    document.getElementById('result').innerHTML = result;
} catch (error) {
    alert(error.message);
}

console.log(result);