const fs = require('fs')

init()
function init(){
  
  console.log(read_file())
  // NOTE: O valor encontrado caso a posição inicial de 'a' seja 1 é 21947;
  // NOTE: O valor encontrado caso a posição inicial de 'a' seja 0 é 21867, Resposta do teste.

}
function read_file(){
  try {  
        let data = fs.readFileSync('./lista_palavras_desordenada.txt', 'utf8')
        let lines = data.split(/\r?\n/);
        let Words
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let countLetters = 0
        let countWord = 0
        lines.forEach(function(line){
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

      } catch(e) {
          console.log('Error:', e.stack)
      }
}
/*
fs.readFile('./lista_palavras_desordenada.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       var Words = line.toString();
       for(var i = 0;i < Words.length;i++){
         countLetters += (alphabet.indexOf(Words[i])); //posição inicial do alfabeto sendo 0; 21867
         //countLetters = countLetters + (alphabet.indexOf(Words[i])+1); //posição incial do alfabeto sendo 1; 21947
        }
       if(countLetters%5 == 0){
         countWord++;
       }
       countLetters = 0;
    })
    console.log(countWord);
    // NOTE: O valor encontrado caso a posição inicial de 'a' seja 1 é 21947;
    // NOTE: Caso o valor da posição de 'a' seja 0 o valor é 21867, resposta do teste.
})*/
