var fs = require('fs');
var math = require('mathjs');
var listAdjacency = [];
var matrixAdjacency = math.matrix();

//-------------------------------------------------------
//search matrixadjacency
//// NOTE: Questao incompleta. Se tiver mais tempo termino:

class graph {
  constructor() {
    this.left = null;
    this.right = null;
    this.center = null
  }
  setValue(value){
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}

fs.readFile('./triangulo.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       flag = line.replace( /\s/g,',');
       listAdjacency.push(flag);
    })
    
})
