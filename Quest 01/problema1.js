var fs = require('fs');

init();
function init(){
  
  console.log(read_file());

}
function read_file(){
  try {  
        var data = fs.readFileSync('./lista_palavras_desordenada.txt', 'utf8');
        var lines = data.split(/\r?\n/);
        var count = 0;
        lines.forEach(function(line){
          var  Words = line.toString();
          if(Words.substring(Words.length-1,Words.length) == 'a'){
              count++;         
          }    
        })
        return count;

      } catch(e) {
          console.log('Error:', e.stack);
          return;
      }
}

//
/*var count = 0;
fs.readFile('./lista_palavras_desordenada.txt', 'utf-8', function(err, data){
    if(err){
      console.log("Error:",err);
      return;
    }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
      var  Words = line.toString();
       if(Words.substring(Words.length-1,Words.length) == 'a'){
         count++;         
       }      

    })
    //console.log(count);
    return count;
})*/
