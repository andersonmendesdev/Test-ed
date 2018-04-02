var fs = require('fs');
var math = require('mathjs');
var ListEdges= [];
var ListAux = [];
var ListFile = [];
//// NOTE: É uma pegadinha?
///
//-------------------------------------------------------
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
      }
      ListFile.push(ListAux);
      ListAux = [];
    })
    //FormGrp(ListFile);
    Graphlevel(ListFile);
})

function  Graphlevel(ListLevel){
  var levellist = [];
  var listaux = [];
  var control = ListLevel.length;
  var indice = 0;
  var auxiliar;
  var listauxiliar = [];
  var total = 0;
  while(control != 0){
    listauxiliar = ListLevel[indice];
    auxiliar = listauxiliar[0];
    for(var i=0 ; i<listauxiliar.length;i++){
      if(listauxiliar[i] > auxiliar){
        auxiliar = listauxiliar[i];
      }
    }
    levellist.push(auxiliar);
    indice++
    control--
  }
  console.log('\n',ListLevel[indice-1]);
  for(var k=0;k<levellist.length;k++){
    total += levellist[k];
  }
  console.log('Valor do triangulo '+ total);
}

/*
function FormGrp(ListComp) {
    var ListOne = [];
    var ListTwo = [];
    var count = 0;
    var Control;
    var graph = [];

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
        //console.log('\n',graph);
}
*/
