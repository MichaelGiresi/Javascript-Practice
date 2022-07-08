const b = []

window.addEventListener('keydown',(e) => {
    const store = e.key

    if(e.key === 'm') {
        b.push(e.key)
    }

    if(b[0] === 'm' && e.key === 'b') {
        b.push(e.key)
    }
    if(b[1] === 'b' && e.key === 'r') {
        b.push(e.key)
    }

    console.log(b)


    
    // if(e.key != 'b' && b) {
        //     console.log('it worked')
        // }
        
        
        if(store != 'z' && b.length > 0) {
           b.length = 0;
        }
    }

    
    )
    
const u = 3
const r = 4

// console.log(b)


console.log('Welcome to the hidden input hang.')









// document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     if (evt.ctrlKey && evt.keyCode == 90) {
//         alert("Ctrl-Z");
//     }
// };