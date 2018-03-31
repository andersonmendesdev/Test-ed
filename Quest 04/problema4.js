var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
var ListFile = [];
var ListNumbers = [];
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
        ListNumbers.push(parseInt(aux.substring(i,i+2)));
      }
      ListFile.push(ListAux);
      ListAux = [];
            
    })
    console.log(ListFile);
    console.log(ListNumbers);
    //var value = ListFile.shift();
   // console.log(value.shift());
    //var value02 = ListFile.shift();
    //console.log(value02.length);
    //console.log(value02.shift());
    //console.log(value02.shift());
    //console.log(value+value02);
})
