const container = document.getElementById('text-container')
const button = document.getElementById('button')
const body = document.getElementById('body')

const getRandomColor = () => {
    const letters = "0123456789ABCDEF"
    let color = "#"

    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    body.style.backgroundColor = color
    return color
    

}
    
// const setRandomColor = () => {
//     getRandomColor()
//     body.style.backgroundColor = color
// }

// setRandomColor()

button.addEventListener('click', () => {
    getRandomColor()
})

