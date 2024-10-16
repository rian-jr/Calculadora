import calculate from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress) 
})
document.getElementById('clear').addEventListener('click', handleClearButton )
input.addEventListener('keydown', handleTyping )
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher )