function  TriangLevel(ListLevel){
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
    for(var k=0;k<levellist.length;k++){
      total += levellist[k];
    }
    console.log('Valor do triangulo '+ total); // Não é esse o valor com certeza, mas também nao há como checar as rotas;
  }