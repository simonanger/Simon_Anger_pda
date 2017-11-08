var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers together', function(){
    calculator.previousTotal = 2
    calculator.add(2)
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 5
    calculator.subtract(2)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply 2 numbers', function(){
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide 2 numbers', function(){
    calculator.previousTotal = 9
    calculator.divide(3)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to divide in to decimal places and not a whole number', function() {
    calculator.previousTotal = 5
    calculator.divide(2)
    assert.strictEqual(calculator.runningTotal, 2.5)
  })

  it('should register a number click', function() {
    calculator.numberClick(2)
    assert.strictEqual(2, calculator.runningTotal)
  })

  it('should update the number held if another is pressed', function() {
    calculator.numberClick(2)
    calculator.numberClick(4)
    assert.strictEqual(24, calculator.runningTotal)
  })

  it('should register when an operator has been click', function() {
    calculator.operatorClick('+')
    assert.strictEqual('+', calculator.previousOperator)
  })

  it('should be able to calculate a full sum', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(6, calculator.runningTotal)
  })

  it('should clear the running total', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.clearClick()
    assert.strictEqual(0, calculator.runningTotal)
  })

  it('should start again if clear button is pressed', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.clearClick()
    calculator.numberClick(4)
    assert.strictEqual(4, calculator.runningTotal)
  })

});
