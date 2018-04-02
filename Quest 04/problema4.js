var fs = require('fs');
var ListAux = [];
var ListFile = [];
//// NOTE: É uma pegadinha?
///
//-------------------------------------------------------
//search list edges;


//fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
fs.readFile('./triangulo.txt', 'utf-8', function(err, data){
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
  moveArray(graph);
}

function positionVector(ListArr,value,level){
  var auxiliar = [];
  for(var i=0;i<ListArr.length;i++){
    auxiliar = ListArr[i].slice();
    if(auxiliar[0] === value & auxiliar[2]=== level)
    {
      return i;
    }
  }
}

function moveArray(ListArray){
  var ListMax = [];
  var vectorOne = [];
  var vectorTwo = [];
  var control = ListFile.length - 1;
  var indice = 0;
  var soma = 0;
  while(control != 0){
        vectorOne = ListArray[indice].slice();
        vectorTwo = ListArray[indice+1].slice();

        if(vectorOne[1] > vectorTwo[1]){
           ListMax.push([vectorOne[0],vectorOne[1]]);
           indice = positionVector(ListArray,vectorOne[1],(vectorOne[2]+1));
        }
        else {
          ListMax.push([vectorTwo[0],vectorTwo[1]]);
          indice = positionVector(ListArray,vectorTwo[1],(vectorTwo[2]+1));
        }
        control--;
  }
  var cont = ListMax[0].slice();
  soma += cont[0];
  soma += cont[1];
  for(var b=1;b<ListMax.length;b++){
      cont = ListMax[b].slice();
    soma += cont[1];
  }
  console.log('Valor triangulo ',soma);
}