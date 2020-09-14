// Get the inputs 
let input1 = document.getElementById('value1');
let input2 = document.getElementById('value2');

// Select the operation
document.getElementById('select_op').addEventListener('change', on_change);
function on_change() {
  let op = this.value;

  // Run show
  show();

  // Get the Form
  document.getElementById('calcForm').addEventListener('submit', calcForm);
  function calcForm(e) {

    // Check for the value if empty or not
    if (input1.value == '' || input2.value == '') {
      // Run showError if the input value are null
      showError();
    } else {
      // Change the type of input values to Number
      val1 = Number(input1.value);
      val2 = Number(input2.value);

      // Show loader
      document.getElementById('calcForm').classList.add('loading');
      document.getElementById('calc-btn').innerText = 'Calculating';

      // Run the main calculation function
      calc(op, val1, val2);

      // Display the results after 3 seconds loading
      setTimeout(function () {
        // Hide loader
        document.getElementById('calcForm').classList.remove('loading');

        // Clear the input fields
        document.getElementById('value1').value = ' ';
        document.getElementById('value2').value = ' ';

        // Change the text of calculate button to normal
        document.getElementById('calc-btn').innerText = 'Calculate';

        // Display the result div
        document.getElementById('results').style.display = 'block';

        // Transition of the results
        $('#text_results').transition('bounce');

        // Attach the result value to h3
        document.getElementById('text').innerText = result;
        window.alert(result);
      }, 3000);
    }
    e.preventDefault();
  }
}

// Show error
function showError() {
  // Show Error
  document.getElementById('error').style.display = 'block';

  // Clear error after 2 sec
  setTimeout(clearError, 2000);
}

// Clear Error
function clearError() {
  document.getElementById('error').remove();
  location.reload();
}

// Show input and button
function show() {
  // Show the input 
  $('#input_value1, #input_value2')
    .transition('shake')
    ;

  $('#calc-btn')
    .transition('shake')
    ;
}

// Main calculation function
function calc(op, val1, val2) {
  // Perform the calculation
  if (op == '+') {
    return result = val1 + val2;
  } else if (op == '-') {
    return result = val1 - val2;
  } else if (op == '*') {
    return result = val1 * val2;
  } else if (op == '/') {
    return result = val1 / val2;
  }
}