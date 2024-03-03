// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to calculate the cube of a number
  function cube(number) {
    return number * number * number;
  }
  
  // Helper function to check if a number is a prime number
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage
  console.log(square(5)); // Output will be 25
  console.log(cube(3)); // Output will be 27
  console.log(isPrime(7)); // Output will be true