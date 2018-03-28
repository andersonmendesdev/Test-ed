var fs = require('fs');
var math = require('mathjs');
var listAdjacency = [];
var matrixAdjacency = math.matrix();
var Words;
var flag;

//-------------------------------------------------------
//search matrixadjacency

fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
    if(err){
      throw err;
    }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       flag = line.replace( /\s/g,',');
       listAdjacency.push(flag);     

    })
    console.log(listAdjacency);

})
