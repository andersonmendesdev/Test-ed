var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
var ListFile = [];
//// NOTE: É uma pegadinha?
///
//-------------------------------------------------------
//search list edges;

fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
       flag = line.replace( /\s/g,'');
       aux = flag.toString(flag);
       for(var i=0; i<aux.length ;i+=2){
        ListAux.push(parseInt(aux.substring(i,i+2)));
      }
      ListFile.push(ListAux);
      ListAux = [];
    })

    FormGrp(ListFile);
})

function FormGrp(ListComp) {
  var ListOne = [];
  var ListTwo = [];
  var count = 0;
  var Control;
  var graph = [];
  var level = 0;
  Control = ListComp.length;

  while(Control != 1){
        ListOne = ListComp[count].slice();
        ListTwo = ListComp[count+1].slice();
        for(var i=0; i<ListOne.length; i++){
              for(var j=0; j<ListTwo.length; j++){
                if(j === 2){
                    ListTwo.shift();
                    break;
                  }
                  graph.push([ListOne[i],ListTwo[j],level]);
              }
        }
        level++
        count++;
        Control--;
  }
  console.log(graph);
  console.log(graph.length);
}

function moveArray(ListArray){
  var valueAuxiliar;

}