const fs = require('fs')
const data = fs.readFileSync('./lista_palavras_desordenada.txt', 'utf8').split(/\r?\n/)

const LerLinha = (lines) =>{
    let count = 0
    let words
    lines.forEach( line => {
      Words = line.toString()
      if(Words.substring(Words.length-1,Words.length) == 'a'){
          count++       
      }    
    })
    return count        
}
console.log(LerLinha(data))
