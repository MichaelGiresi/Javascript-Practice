// There is a vote, with a subject. There are two types of votes. One type is boolean, Yes or No. The second type is a series of choices, with a tally.

// Example 1 : There is a vote for changing the font color to purple. Present the result in an array, and display the winner in the DOM.


// Example 2 : Ther is a vote for president. Have several choices to choose from, then tally the results, and display the result in the dom.


// Security checks:

// 1. Unique identifier required from each user.
// 2. Each user has to confirm their identiy.
// 3. Randomly generated key 




const yesButton = document.getElementById('button-yes')
const noButton = document.getElementById('button-no')


let yes = 0 
let no = 0



yesButton.addEventListener('click', () => {
    yes += 1
    console.log(yes)
})

noButton.addEventListener('click', () => {
    no += 1
    console.log(no)
})