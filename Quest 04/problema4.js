var fs = require('fs');
var ListAux = [];
var ListFile = [];
//// NOTE: É uma pegadinha?
///
//-------------------------------------------------------
//search list edges;

init();// inicizaliar

function init(){
  var list = [];
  var listGrp = [];
  list = rdfile();
  listGrp = FormGrp(list);
  moveArray(listGrp);
}

function rdfile(){
  try {  
        var data = fs.readFileSync('./triangulo.txt', 'utf8');
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
        return ListFile;   
      } catch(e) {
          console.log('Error:', e.stack);
      }
}


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
  return graph;
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

function positionVector(ListArr,value,level){
  var Arr = [];
  for(var i=0;i<ListArr.length;i++){
    Arr = ListArr[i].slice();
    if(Arr[0] === value & Arr[2]=== level)
    {
      return i;
    }
  }
}