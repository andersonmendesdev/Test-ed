var fs = require('fs');
var math = require('mathjs');
var listAdjacency = [];
var matrixAdjacency = math.matrix();
var Words;
var flag;

//-------------------------------------------------------
//search matrixadjacency








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
    //console.log(listAdjacency);

})
