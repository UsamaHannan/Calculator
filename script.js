

let val = document.getElementById("calc");

    function btn_add(x){
    val.value+=x;
    }
    
    
    function cls(){
    val.value="";
    }
    
    function equal(){
    val.value=eval(val.value);
    }
    
    
    function back(){
    val.value=val.value.substr(0,val.value.length-1);
    }


