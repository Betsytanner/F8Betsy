
//second program 

//algorithm
//get 2 numbers from user using a control
//multiply or add numbers based on user preference 
//display answer
//clear display

//multiplication function
function mult(x,y) {
  return x * y
}  

//addition function
function add(x,y) {
  return Number(x) + Number(y) 
}  

//call multiply function
butMult.onclick=function(){
  lblAnswer.value = mult(inpNum1.value, inpNum2.value)
}

//call addition function
butAdd.onclick=function(){
  lblAnswer.value = add(inpNum1.value, inpNum2.value)
}

//call reset function
butReset.onclick=function(){
  inpNum1.value = ""
  inpNum2.value = ""
  lblAnswer.value = ""
}
