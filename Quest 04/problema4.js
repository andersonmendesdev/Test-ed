var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
//var matrixAdjacency = math.matrix();
//// NOTE: Questao incompleta. Se tiver mais tempo termino:
//-------------------------------------------------------
//search matrixadjacency;
//search list edges;





fs.readFile('./triangulo.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       flag = line.replace( /\s/g,',');
       ListAux.push(flag);
    })
    
})
