export class StringCalculator {
  constructor() {}
  intAdd(data) {
    //const numberSplit = data.split(',')
    const res = /[\n,]/
    const numberSplit = data.split(res)
    //console.log(numberSplit)
    if (data === '') {
      return 0
    }
    const result = numberSplit.reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0
    )
    return result
  }
}
