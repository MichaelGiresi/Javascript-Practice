let inputName = document.getElementById('input-name')
let inputDate = document.getElementById('input-date')
let inputAmount = document.getElementById('input-amount')
let inputButton = document.getElementById('input-button')
let expenseContainerName = document.getElementById('expense-container-name')
let expenseContainerDate = document.getElementById('expense-container-date')
let expenseContainerAmount = document.getElementById('expense-container-amount')

inputButton.addEventListener('click', function(){
    const name = document.createElement('p')
    const date = document.createElement('p')
    const amount = document.createElement('p')
    name.innerText = inputName.value
    date.innerText = inputDate.value
    amount.innerText = inputAmount.value
    expenseContainerName.appendChild(name)
    expenseContainerDate.appendChild(date)
    expenseContainerAmount.appendChild(amount)
    inputName.value = ""
    inputDate.value = ""
    inputAmount.value = ""
})