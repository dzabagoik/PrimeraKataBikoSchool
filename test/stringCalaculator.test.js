import { StringCalculator } from '../src/stringCalculator'

describe('stringCalculator should', () => {
  let suma

  beforeEach(() => {
    suma = new StringCalculator()
  })
  it('El string vacio devuelve 0', () => {
    expect(suma.intAdd('')).toEqual(0)
  })
  it('El string "1" devuelve 1', () => {
    expect(suma.intAdd('1')).toEqual(1)
  })
  it('El string "1,2" devuelve 1+2=3 ', () => {
    expect(suma.intAdd('1,2')).toEqual(3)
  })
  it('El string "1,2,5" devuelve 1+2+5=8 ', () => {
    expect(suma.intAdd('1,2,5')).toEqual(8)
  })
  it('El string "1\n2,3" devuelve 1+2+3=6 ', () => {
    expect(suma.intAdd('1\n2,3')).toEqual(6)
  })
  it('El string "1,\n2,3" devuelve caso no Correcto NaN ', () => {
    expect(suma.intAdd('1,\n2,3')).toEqual(NaN)
  })
})
