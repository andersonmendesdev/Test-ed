var fs = require('fs');
var ListAux = [];
var ListFile = [];
function rdfile(){
try {  
    var data = fs.readFileSync('./triangulos.txt', 'utf8');
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
     //console.log(ListFile);
     return ListFile;   
    } catch(e) {
        console.log('Error:', e.stack);
    }
}
inicializar();

function inicializar(){
    var list = [];
    list = rdfile();
    console.log(list);
}



function rdFile(){
    //fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
      fs.readFile('./triangulos.txt', 'utf-8', function(err, data){
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
     })
     return ListFile;
    
    }