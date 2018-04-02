var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
var ListFile = [];
//const ListComp;
//var ListNumbersOne = [];
//var ListNumbersTwo = [];
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
       flag = line.replace( /\s/g,'');
       aux = flag.toString(flag);
       for(var i=0; i<aux.length ;i+=2){
        ListAux.push(parseInt(aux.substring(i,i+2)));
        //ListNumbersOne.push(parseInt(aux.substring(i,i+2)));
        //ListNumbersTwo.push(parseInt(aux.substring(i,i+2)));
      }
      //console.log(ListAux);
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
    //var ListComp = [[59],[73,41],[52,40,9],[26,53,6,34],[10,51,87,86,81]];

    Control = ListComp.length;
    //console.log(ListComp);

    while(Control != 1){
          ListOne = ListComp[count].slice();
          ListTwo = ListComp[count+1].slice();
          for(var i=0; i<ListOne.length; i++){
                for(var j=0; j<ListTwo.length; j++){
                  if(j === 2){
                      ListTwo.shift();
                      break;
                    }
                    graph.push([ListOne[i],ListTwo[j]]);
                }
          }
          count++;
          Control--;
    }
        console.log('\n',graph);
}

function searchGrp(){
var total = 0;
var control = 0;
var Listarest = [[59,73],[59,41],[73,52],[73,40],[41,40],[41,9],[52,26],[52,53],[40,53],[40,6],[9,6],[9,34]];
var Listfinigsh = [26,53,6,34];

      while(control != 0){



      }
}
