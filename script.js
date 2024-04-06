var inpt = document.getElementById("display");

function display(input){
    inpt.value += input;
}

function clearDisplay(){
    inpt.value = '';
}

function Evaluate(){
   try{
    inpt.value = eval(inpt.value);
   }catch(err){
      inpt.value="Error"  
   }
}