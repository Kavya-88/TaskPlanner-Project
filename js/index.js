// const form = document.querySelector("#Modal");
let name1 = document.getElementById('myName');
  let validateDescription = document.querySelector("#description");
  const validateAssignedTo = document.querySelector("#assign");
  const validateDueDate = document.querySelector("#dueDate");
  const validateStatus = document.querySelector("#status");

let btnSub2 = document.querySelector("#savechanges");

let errMsg1 = document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");
btnSub2.addEventListener("click", validateBox);
// let validationFail = 0;
function validateBox() {
  
  // Task Name input value is more than 5 characters.
  if (name1.value == "" || name1.value.length < 5) {
    console.log(name1.value.length);
    errMsg1.innerHTML = "Length should be more than 5";
    errMsg1.style.color = "#ff0000";
    name1.focus();
  } else {
    errMsg1.innerHTML = "All good ";
    errMsg1.style.color = "#eeeeee";

  }
  // Task Description input value is more than 5 characters.
  
  if (validateDescription.value == "" || validateDescription.value.length < 5) {
    console.log(validateDescription.value.length);
    errMsg2.innerHTML = "Length should be more than 5";
    errMsg2.style.color = "#ff0000";
    validateDescription.focus();
    } else {
    errMsg2.innerHTML = "All good ";
    errMsg2.style.color = "#eeeeee";
  }
// // validate assignedto

if(validateAssignedTo.value === "assignedto"){
console.log(validateAssignedTo.value);
  errMsg3.innerHTML ="Choose the name";
  errMsg3.style.color = "#ff0000";
  validateAssignedTo.focus();
  } else {
  errMsg3.innerHTML = "All good ";
  errMsg3.style.color = "#eeeeee";
}

// // validate Status
if(validateStatus.value === "status"){
console.log(validateStatus.value);
  errMsg4.innerHTML ="Choose the status";
  errMsg4.style.color = "#ff0000";
  validateStatus.focus();
  } else {
  errMsg4.innerHTML = "All good ";
  errMsg4.style.color = "#eeeeee";
}

// console.log(validateStatus.value);
//   const date = validateDueDate;
  // if(date.value === "dd/mm/yyyy"){
  //     errMsg5.innerHTML ="Select the correct date";
  //     errMsg5.style.color = "#ff0000";
  //     date.focus();
  //     } else {
  //     errMsg5.innerHTML = "All good ";
  //     errMsg5.style.color = "#eeeeee";
  //   }

  if (validateDueDate.value) {
    validateDueDate.classList.add("is-valid");
    validateDueDate.classList.remove("is-invalid");
  } else {
    validateDueDate.classList.add("is-invalid");
    validateDueDate.classList.remove("is-valid");
    // validationFail++;
  }
    
//     console.log(date.value);
    
    
    }
    
  
  