const fs = require('fs')
let ListFile = []


init()// inicizaliar

function init(){
  const file = read_files()
  const GraphEgdes = createGraph(file) 
  verifyEdges(GraphEgdes)
}

function read_files(){
  try {  
        let ListAux = []
        const data = fs.readFileSync('./triangulo.txt', 'utf8').split(/\r?\n/)
        data.forEach(line => {
            flag = line.replace( /\s/g,'')
            aux = flag.toString(flag)
            for(let i=0; i<aux.length ;i+=2){
                ListAux.push(parseInt(aux.substring(i,i+2)));
            }
            ListFile.push(ListAux)
            ListAux = []
       })
        return ListFile
      } catch(e) {
          console.log('Error:', e.stack)
      }
}

function createGraph(ListComp) {
  let ListOne = []
  let ListTwo = []
  let count = 0
  let graph = []
  let level = 0
  let Control = ListComp.length

  while(Control != 1){
        ListOne = ListComp[count].slice()
        ListTwo = ListComp[count+1].slice()
        for(let i=0; i<ListOne.length; i++){
          for(let j=0; j<ListTwo.length; j++){
            if(j === 2){
                ListTwo.shift()
                break
            }
            graph.push([ListOne[i],ListTwo[j],level]);
          }
        }
        level++
        count++
        Control--
  }
  return graph
}

function verifyEdges(ListArray){
  let ListRoute = []
  let vectorOne = []
  let vectorTwo = []
  let control = ListFile.length - 1
  let indice = 0
  let soma = 0
  vectorOne = ListArray[indice].slice()
  ListRoute.push(vectorOne[0])
  while(control != 0){
        vectorOne = ListArray[indice].slice()
        vectorTwo = ListArray[indice+1].slice()

        if(vectorOne[1] > vectorTwo[1]){
           ListRoute.push(vectorOne[1])
           indice = positionEdges(ListArray,vectorOne[1],(vectorOne[2]+1))
        }
        else {
          ListRoute.push(vectorTwo[1])
          indice = positionEdges(ListArray,vectorTwo[1],(vectorTwo[2]+1))
        }
        control--
  }
  for(let b=0;b<ListRoute.length;b++){
      soma += ListRoute[b]
  }
  console.log('Valor triangulo',soma)
}

function positionEdges(ListArr,value,level){
  let Arr = []
  for(let i=0;i<ListArr.length;i++){
    Arr = ListArr[i].slice()
    if(Arr[0] == value && Arr[2]== level){
      return i
    }
  }
}