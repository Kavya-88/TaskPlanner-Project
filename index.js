// function validFormFieldInput() {
//   var taskname = document.addtask.inputtext;
//   if(allLetter(taskname)){
//   }
//   return false;
// }

// function allLetter(taskname)
// { 
// var letters = /^[A-Za-z]+$/;
// if(taskname.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Task name must have alphabet characters only');
// taskname.focus();
// return false;
// }
// }



function validFormFieldInput() {
  if( document.addtask.Name.value == "") {
     alert( "Please provide your name!");
     document.addtask.Name.focus();
     return false;
  }
}
