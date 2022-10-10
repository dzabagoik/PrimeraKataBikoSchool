export const fizzBuzz = function(numero) {
  if (numero % 5 === 0 && numero % 3 === 0) {
    return 'FizzBuzz'
  }
  if (numero % 3 === 0) {
    return 'Fizz'
  }
  if (numero % 5 === 0) {
    return 'Buzz'
  }
  return numero
}
