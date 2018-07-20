const fs = require('fs')
let valueGlobal = 0
//Rules route
//
/*         12
        4     54
      7     23    

*/
//12>>7>>54>>23 = To 23; 7????
//12>>4 = To 4;
//----------STRUCT----------
class TreeN {
    constructor() {
      this.left = null
      this.right = null
    }
    setValue(value){
      this.value = value
    }
    getValue() {
      return this.value
    }
}
//----------INSERT--------------------------------------
function insertNode(treeNodo, value) {
  if(!treeNodo.hasOwnProperty('value')){
    return treeNodo.setValue(value)
  }
  else {
    while (true) {
      if (value <= treeNodo.value) {
        if(!treeNodo.left){
          treeNodo.left = new TreeN()
          return treeNodo.left.setValue(value)
        }
        else {
          treeNodo = treeNodo.left
        }
      }
      else {
        if(!treeNodo.right){
          treeNodo.right = new TreeN()
          return treeNodo.right.setValue(value)
        }
        else {
          treeNodo = treeNodo.right
        }
      }
    }
  }
}


function searchTrue(treeNode, value){
    if(!treeNode.value || treeNode.value === value){
      valueGlobal += treeNode.value
      return treeNode.value
    }
    if(value < treeNode.value){
      valueGlobal += treeNode.value
      return searchTrue(treeNode.left, value)
    } 
   valueGlobal += treeNode.value
   return  searchTrue(treeNode.right, value)
}
//------------------------------------

//-------------------------------

function rdfile(){
    try {  
          const ListAux = []
          const data = fs.readFileSync('./numeros.txt', 'utf8').split(/\r?\n/)
          data.forEach(line => {
            ListAux.push(parseInt(line))
          })
          return ListAux  
        } catch(e) {
            console.log('Error:', e.stack)
        }
}

init()
function init(){
      const ListTree = rdfile() 
      const treeNode = new TreeN()       
      for(let i=0;i<ListTree.length;i++){
          insertNode(treeNode,ListTree[i])
      }
      
      searchTrue(treeNode,83099);
      console.log('soma da rota ',83099,' e ',valueGlobal)
}