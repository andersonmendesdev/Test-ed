const fs = require('fs')
let valueGlobal = 0
//var treeNodo = new nodo();
//const treeNodo = {}
//Rules route;
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
      this.value = value;
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
          return treeNodo.left.setValue(value);
        }
        else {
          treeNodo = treeNodo.left
        }
      }
      else {
        if(!treeNodo.right){
          treeNodo.right = new TreeN()
          return treeNodo.right.setValue(value);
        }
        else {
          treeNodo = treeNodo.right
        }
      }
    }
  }
}
//in order
function inOrder(treeNodo){
  if(treeNodo){
    inOrder(treeNodo.left)
    console.log(treeNodo.getValue());
    inOrder(treeNodo.right)
  }
}
//pre order
function preOrder(treeNodo) {
  if(treeNodo){
    console.log(treeNodo.getValue());
    preOrder(treeNodo.left)
    preOrder(treeNodo.right)
  }
}
//pos order
function posOrder(treeNodo) {
  if(treeNodo){
    posOrder(treeNodo.left)
    posOrder(treeNodo.right)
    console.log(treeNodo.getValue())

  }
}

function searchTreeLTR(node) {
    let queue = [node]
    let result = []
    while (node = queue.shift()) {
        result.push(node.value)
        console.log(node.value)
        node.left && queue.push(node.left)
        console.log(node.left)
        node.right && queue.push(node.right)
        console.log(node.right)
    }
    return result
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
          let ListAux = []
          let data = fs.readFileSync('./numeros.txt', 'utf8')
          let lines = data.split(/\r?\n/)
            lines.forEach(function(line){
              ListAux.push(parseInt(line))
            })
          return ListAux;   
        } catch(e) {
            console.log('Error:', e.stack)
        }
}

init()
function init(){
      let ListTree = []
      const treeNode = new TreeN()
      ListTree = rdfile()
      for(let i=0;i<ListTree.length;i++){
          insertNode(treeNode,ListTree[i])
      }
      
      searchTrue(treeNode,83099);
      console.log('soma da rota ',83099,' e ',valueGlobal)
}