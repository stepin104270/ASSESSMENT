var register1 = function(name){
    return function validate1(){
 
        if(name==" "){
            console.log("not a valid name");
        }
            else{
                console.log("valid name");
            }
        };
    };
    var res=register1(" ");
    res();