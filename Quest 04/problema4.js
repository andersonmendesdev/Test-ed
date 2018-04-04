var fs = require('fs');
var ListFile = [];

init();// inicizaliar

function init(){
  var file = [];
  var GraphEgdes = [];
  file = read_files();
  GraphEgdes = createGraph(file);
  verifyEdges(GraphEgdes);
  //verifyEdges(createGraph(read_files()));
}

function read_files(){
  try {  
        var ListAux = [];
        var data = fs.readFileSync('./triangulo.txt', 'utf8');
        //var data = fs.readFileSync('./triangulos.txt', 'utf8');
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

function createGraph(ListComp) {
  var ListOne = [];
  var ListTwo = [];
  var count = 0;
  var graph = [];
  var level = 0;
  var Control = ListComp.length;

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

function verifyEdges(ListArray){
  var ListRoute = [];
  var vectorOne = [];
  var vectorTwo = [];
  var control = ListFile.length - 1;
  var indice = 0;
  var soma = 0;
  vectorOne = ListArray[indice].slice();
  ListRoute.push(vectorOne[0]);
  while(control != 0){
        vectorOne = ListArray[indice].slice();
        vectorTwo = ListArray[indice+1].slice();

        if(vectorOne[1] > vectorTwo[1]){
           ListRoute.push(vectorOne[1]);
           indice = positionEdges(ListArray,vectorOne[1],(vectorOne[2]+1));
        }
        else {
          ListRoute.push(vectorTwo[1]);
          indice = positionEdges(ListArray,vectorTwo[1],(vectorTwo[2]+1));
        }
        control--;
  }
  for(var b=0;b<ListRoute.length;b++){
      soma += ListRoute[b];
  }
  console.log('Valor triangulo',soma);
}

function positionEdges(ListArr,value,level){
  var Arr = [];
  for(var i=0;i<ListArr.length;i++){
    Arr = ListArr[i].slice();
    if(Arr[0] === value & Arr[2]=== level){
      return i;
    }
  }
}