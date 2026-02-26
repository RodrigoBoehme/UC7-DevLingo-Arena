const readline = require('readline-sync');


function fnafAlikeGame(){
      

  let animatronics=[
   {name:"Bonnie",position:0,path:[],actions:{kill:()=>{}},level:5}
  ]
  while(true){
    console.log()

    let opt=readline.questionInt("What are your action?")
    switch(opt){
      case 1:
        forEach(q=>{console.log(q.position)})
      break
           

    }        
  }
}