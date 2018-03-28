var fs = require('fs');
var count = 0;
fs.readFile('./lista_palavras_desordenada.txt', 'utf-8', function(err, data){
    if(err){
      throw err;
    }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
      var  Words = line.toString();
       if(Words.substring(Words.length-1,Words.length) == 'a'){
         count++;
       }

    })
    console.log(count);
})
