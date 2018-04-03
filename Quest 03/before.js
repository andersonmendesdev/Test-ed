var fs = require('fs');
var valueGlobal = 0;
var stats;
//Rules route;
//
/*         12
        4     54
      7     23    

*/
//12>>7>>54>>23 = To 23; 7????
//12>>4 = To 4;
//----------STRUCT----------
class nodo {
  constructor() {
    this.left = null;
    this.right = null;
  }
  setValue(value){
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}
//----------INSERT--------------------------------------
var insertNode = function(treeNodo, value) {
  if(!treeNodo.hasOwnProperty('value')){
    return treeNodo.setValue(value);
  }
  else {
    while (true) {
      if (value <= treeNodo.value) {
        if(!treeNodo.left){
          treeNodo.left = new nodo();
          return treeNodo.left.setValue(value);
        }
        else {
          treeNodo = treeNodo.left;
        }
      }
      else {
        if(!treeNodo.right){
          treeNodo.right = new nodo();
          return treeNodo.right.setValue(value);
        }
        else {
          treeNodo = treeNodo.right;
        }
      }

    }
  }

}
//in order
var inOrder = function(treeNodo){
  if(treeNodo){
    inOrder(treeNodo.left);
    console.log(treeNodo.getValue());
    inOrder(treeNodo.right);
  }
}
//pre order
var preOrder = function(treeNodo) {
  if(treeNodo){
    console.log(treeNodo.getValue());
    preOrder(treeNodo.left);
    preOrder(treeNodo.right);
  }
}
//pos order
var posOrder = function(treeNodo) {
  if(treeNodo){
    posOrder(treeNodo.left);
    posOrder(treeNodo.right);
    console.log(treeNodo.getValue());

  }
}

var searchTreeLTR = function(node) {
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        console.log(node.value);
        node.left && queue.push(node.left);
        console.log(node.left);
        node.right && queue.push(node.right);
        console.log(node.right);
    }
    return result;
};

//Search simple
var searchTrue = function(treeNodo, value){
    if(!treeNodo.value || treeNodo.value === value){
    valueGlobal += treeNodo.value;
    return treeNodo.value;
  }
    if(value < treeNodo.value){
    valueGlobal += treeNodo.value;
    return searchTrue(treeNodo.left, value);
  }
   valueGlobal += treeNodo.value;
   return  searchTrue(treeNodo.right, value);
}
//------------------------------------

//-------------------------------

var treeNodo = new nodo();
fs.readFile('./numeros.txt', 'utf-8', function(err, data){
  if(err){
    console.log("Error:",err);
    return;
  }
    var lines = data.split(/\r?\n/);
    lines.forEach(function(line){
      var number = parseInt(line);
      insertNode(treeNodo, number);
    })
    searchTrue(treeNodo,83099);
    console.log(valueGlobal);

})