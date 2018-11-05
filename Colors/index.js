let colors = generateRandomColors(6)

let squares = document.querySelectorAll('.square')
let selectedColor = selectColor()
let colorDisplay = document.getElementById('colorDisplay')
let message = document.getElementById('message')
let h1 = document.querySelector('h1')
let resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', function() {
    colors = generateRandomColors(6)
    selectedColor = selectColor()
    for(let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    colorDisplay.textContent = selectedColor
    h1.style.backgroundColor = '#232323'
    
})

for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i]

    squares[i].addEventListener('click', () => {
        let pickedColor = squares[i].style.backgroundColor
        if (pickedColor === selectedColor) {
            message.textContent = "CORRECT!"
            changeColors(selectedColor)
            h1.style.backgroundColor = selectedColor
            resetBtn.textContent = 'Play Again'
        } else {
            squares[i].style.backgroundColor = '#232323'
            message.textContent = "TRY AGAIN"
        }
    })
}

colorDisplay.textContent = selectedColor

function changeColors(color) {
    for(let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function selectColor() {
    let x = Math.floor(Math.random() * colors.length)
    return colors[x]
}

function generateRandomColors(num) {
    let arr = []
    for(let i=0; i<num; i++) {
        let color = generateColor()
        arr.push(color)
    }
    return arr
}

function generateColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let color = `rgb(${red}, ${green}, ${blue})`
    return color
}