const morseCode = {
   "a": ".-",
   "b": "-...",
   "c": "-.-.",
   "d": "-..",
   "e": ".",
   "é": "..-..",
   "f": "..-.",
   "g": "--.",
   "h": "....",
   "i": "..",
   "j": ".---",
   "k": "-.-",
   "l": ".-..",
   "m": "--",
   "n": "-.",
   "o": "---",
   "p": ".--.",
   "q": "--.-",
   "r": ".-.",
   "s": "...",
   "t": "-",
   "u": "..-",
   "v": "...-",
   "w": ".--",
   "x": "-..-",
   "y": "-.--",
   "z": ".---..",

   "1": ".----",
   "2": "..---",
   "3": "...--",
   "4": "....-",
   "5": ".....",
   "6": "-....",
   "7": "--...",
   "8": "---..",
   "9": "----.",
   "0": "-----",

   ".": ".-.-.-",
   ",": "--..--",
   ":": "---...",
   "/": "-....-",
   "'": ".----.",
   '"': ".-..-.",
   '=': "-...-",
   "?": "..--..",
   "(": "-.--.",
   ")": "-.--.-",
   "@": ".--.-.",

   // those aren't true
   "A": "-.-..-.-",
   "B": "-.-.-...",
   "C": "-.-.-.-.",
   "D": "-.-.-..",
   "E": "-.-..",
   "É": "-.-...-..",
   "F": "-.-...-.",
   "G": "-.-.--.",
   "H": "-.-.....",
   "I": "-.-...",
   "J": "-.-..---",
   "K": "-.-.-.-",
   "L": "-.-..-..",
   "M": "-.-.--",
   "N": "-.-.-.",
   "O": "-.-.---",
   "P": "-.-..--.",
   "Q": "-.-.--.-",
   "R": "-.-..-.",
   "S": "-.-....",
   "T": "-.-.-",
   "U": "-.-...-",
   "V": "-.-....-",
   "W": "-.-..--",
   "X": "-.-.-..-",
   "Y": "-.-.-.--",
   "Z": "-.-.--..",

   "!": "...-...",
   "-": "...--..",
   "_": "...---.",
   "|": "...----",
   "©": "...--...",
   "’": "..---...",
   "è": "...---..",
   "ê": "...----.",
   "à": "..-----.",
   "→": "..------"
  
}
const morseValues = Object.values(morseCode)
const morseProperties = Object.keys(morseCode)
const elems = document.querySelectorAll('a:not(.nav-brand,.nav-link),h1,h2,h3,p')
const checkbox = document.querySelector('.checkbox')

let walrus = 0

const convertToMorse = (str) => {
   return str.split("").map(el => {
      if(morseCode[el]){
         return morseCode[el]
      }else if(!morseCode[el]){
         return el
      }
   }).join(" ");
};
const convertToLetters = (str) => {
   let innerHtml = ''
   str.split(" ").forEach(el=>{
      // if el is in morseValues
      if(morseValues.indexOf(el) !== -1){
         morseValues.forEach((morseValue,i)=>{
            if(el == morseValue){
               innerHtml = innerHtml + morseProperties[i]
            }
         })
      }
      // else if it's a character donts transform el
      else if (el.length == 1){
         innerHtml = innerHtml + el
      }
      // else if it's an empty string
      else{
         innerHtml = innerHtml + ' '
      }
   });
   return innerHtml
};
window.addEventListener('load',()=>{
   checkbox.children[0].checked = false

})
checkbox.children[0].addEventListener("click",(checkbox) => {
   elems.forEach(el =>{
      if(checkbox.target.checked){
         el.style.fontSize = parseInt(getComputedStyle(el).fontSize)/ 1.25 + 'px'
         el.innerHTML = convertToMorse(el.innerHTML)
      }else{
         el.style.fontSize = parseInt(getComputedStyle(el).fontSize)* 1.25 + 'px'
         el.innerHTML = convertToLetters(el.innerHTML)
      }
      el.style.transition = 'opacity .3s,color .3s,transform 3s'
   })
   // if(e.target.checked){
   //    elems.forEach(e =>{
   //       e.style.transition = 'opacity .3s,color .3s,transform 3s'
   //       e.style.fontSize = parseInt(getComputedStyle(e).fontSize)/ 1.25 + 'px'
   //       e.innerHTML = convertToMorse(e.innerHTML)
   //    })
   // }else{
   //    elems.forEach(e =>{
   //       e.style.transition = 'opacity .3s,color .3s,transform 3s'
   //       e.style.fontSize = parseInt(getComputedStyle(e).fontSize)* 1.25 + 'px'
   //       e.innerHTML = convertToLetters(e.innerHTML)
   //    })
   // }
})
