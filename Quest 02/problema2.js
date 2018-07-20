const fs = require('fs')
const data = fs.readFileSync('./lista_palavras_desordenada.txt', 'utf8').split(/\r?\n/)
const alphabet = 'abcdefghijklmnopqrstuvwxyz'


const lerPalavras = (lines) => {        
  let countLetters = 0
  let countWord = 0
  lines.forEach( line =>{
    Words = line.toString()
      for(let i = 0;i < Words.length;i++){
         countLetters += (alphabet.indexOf(Words[i])); //posição inicial do alfabeto sendo 0; 21867
         //countLetters += (alphabet.indexOf(Words[i])+1); //posição incial do alfabeto sendo 1; 21947
      }
      if(countLetters%5 == 0){
        countWord++
      }
      countLetters = 0
  })
  return countWord
}

console.log(lerPalavras(data))
