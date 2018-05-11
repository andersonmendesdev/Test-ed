const fs = require('fs')

init()
function init(){
  
  console.log(read_file())

}
function read_file(){
  try {  
        let data = fs.readFileSync('./lista_palavras_desordenada.txt', 'utf8')
        let lines = data.split(/\r?\n/)
        let count = 0
        lines.forEach( line => {
          let  Words = line.toString()
          if(Words.substring(Words.length-1,Words.length) == 'a'){
              count++       
          }    
        })
        return count

      } catch(e) {
          console.log('Error:', e.stack)
      }
}