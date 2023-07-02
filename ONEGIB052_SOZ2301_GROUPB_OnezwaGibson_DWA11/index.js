let counter = 0;
// const counterDisplay = document.getElementById('counter');

function incrementCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
  }
}

function resetCounter() {
  counter = 0;
  counterDisplay.textContent = counter;
  
}

function displayConfirmationMessage(message) {
  alert(message);
}

function getState() {
      return counter;
    }
    
    function dispatch(action) {
      switch (action.type) {
        case 'ADD':
          counter += action.payload;
          // counterDisplay.textContent = counter;
          break;
          case 'SUBTRACT': // Add a case for the 'SUBTRACT' action
          counter -= action.payload;
          // counterDisplay.textContent = counter;
          break;
          case 'RESET' : // Add a case for the 'RESET' action
          counter = 0;
          // counterDisplay.textContent = counter;
          break;
        default:
          break;
      }
    }
    
    console.log(getState()); // Log the initial state to the console
    // Dispatch "ADD" actions
    dispatch({ type: 'ADD', payload: 1 });
    dispatch({ type: 'ADD', payload: 1 });

    console.log(getState()); // Log the initial state to the console
    // Dispatch "SUBTRACT" action
    dispatch({type: 'SUBTRACT',payload: 1});

    console.log(getState()); // Log the updated state to the console
    
    // Dispatch "RESET" action
    dispatch({ type: 'RESET' });
    console.log(getState()); // Log the reset state to the console