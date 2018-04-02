
function FormGrp(ListComp) {
    var ListOne = [];
    var ListTwo = [];
    var count = 0;
    var Control;
    var graph = [];

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
                    graph.push([ListOne[i],ListTwo[j]]);
                }
          }
          count++;
          Control--;
    }
}