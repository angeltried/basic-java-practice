class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this. currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
  clear(){
    this.currentOperand =''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete(){
    
  }
  appendNumber(number){
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation){
    
  }
  compute(){
    
  }
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperation
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})