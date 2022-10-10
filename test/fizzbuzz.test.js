const myFizzBuzz = require('../src/fizzbuzz')

const array = [
  [1, 1],
  [3, 'Fizz'],
  [5, 'Buzz'],
  [15, 'FizzBuzz']
]

describe('double should', () => {
  array.forEach(([input, expected]) => {
    test(`input ${input} be ${expected}`, () => {
      expect(myFizzBuzz.fizzBuzz(input)).toEqual(expected)
    })
  })
})

/* OPCION B PARA TESTEAR
describe('FizzBuzz', () => {
  it('my num is 1', () => {
    expect(myFizzBuzz.fizzBuzz(1)).toEqual(1)
  })
  it('Comprueba que dando 3 devuelve Fizz', () => {
    expect(myFizzBuzz.fizzBuzz(3)).toEqual('Fizz')
  })
  it('Comprueba que dando 5 devuelve Buzz', () => {
    expect(myFizzBuzz.fizzBuzz(5)).toEqual('Buzz')
  })
  it('Comprueba que dando numero divisible por 3 y 5 devuelve FizzBuzz', () => {
    expect(myFizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz')
  })
})
*/
