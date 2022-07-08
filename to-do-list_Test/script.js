const input = document.getElementById('input')
const button = document.getElementById("button")
const list = document.getElementById('list')

button.addEventListener('click', () => {
    const paragraph = document.createElement('p')
    paragraph.innerText = input.value
    list.appendChild(paragraph)
    input.value = ""

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', () => {
        list.removeChild(paragraph)
    })
})