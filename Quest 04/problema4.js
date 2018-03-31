var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
var ListFile = [];
var ListNumbersOne = [];
var ListNumbersTwo = [];
//var matrixAdjacency = math.matrix();
//// NOTE: Questao incompleta. Se tiver mais tempo termino:
//-------------------------------------------------------
//search matrixadjacency;
//search list edges;




var aux;
var i = 0;
fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       flag = line.replace( /\s/g,'');
       aux = flag.toString(flag);
       for(i=0; i<aux.length ;i+=2){
        ListAux.push(parseInt(aux.substring(i,i+2)));
        ListNumbersOne.push(parseInt(aux.substring(i,i+2)));
        ListNumbersTwo.push(parseInt(aux.substring(i,i+2)));
      }
      ListFile.push(ListAux);
      ListAux = [];
            
    })
    console.log(ListFile);
    console.log(ListNumbersOne);
    console.log('\n',ListNumbersTwo);
    var control = 0;
    while(control !== 100){

    }

})
