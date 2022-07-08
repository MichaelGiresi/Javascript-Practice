const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')

button.addEventListener('click', function() {
    const paragraph = document.createElement('p')
    paragraph.innerText = input.value
    list.appendChild(paragraph)

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function() {
        list.removeChild(paragraph)
    })
})