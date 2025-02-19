// // input.addEventListener("focus", ()=>{
//  //        input.classList.add("focused");
//  //    });

//  //    input.addEventListener("blur", () => {
//  //        input.classList.remove("focused");
//  //    });


// let inputs = document.querySelectorAll("input");

// inputs.forEach((input,index) => {
// 	input.addEventListener("input",function(){
// 		shiftFocus(index);
// 	})
// 	input.addEventListener("keydown", function(e){
// 		unshiftFocus(e,index);
// 	})
// 	input.addEventListener("focus", ()=>{
//         setTimeout(() => {
//             input.classList.add("focused");
//         }, 10);
//     });

//     input.addEventListener("blur", () => {
//         input.classList.remove("focused");
//     });
// })

// function shiftFocus(index){
// 	if (inputs[index].value !== "" && index<inputs.length - 1) {
//         inputs[index + 1].focus(); 

		
// 		const currentInput = inputs[index];
//     const nextInput = inputs[index + 1];
    
//     // Explicitly manage classes
//     currentInput.classList.remove("focused");
//     // nextInput.focus();
//     nextInput.classList.add("focused");

//     }
// }
// function unshiftFocus(e,index){

// 	if(e.key === "Backspace" && index>0){
// 		e.preventDefault();
// 		inputs[index].value="";
// 		inputs[index-1].focus();


// 		 const currentInput = inputs[index];
//     const prevInput = inputs[index - 1];
    
//     // currentInput.value = "";
//     currentInput.classList.remove("focused");
//     // prevInput.focus();
//     prevInput.classList.add("focused");
// 	}
// }

let inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
  input.addEventListener("input", function() {
    shiftFocus(index);
  });

  input.addEventListener("keydown", function(e) {
    unshiftFocus(e, index);
  });

  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    input.classList.remove("focused");
  });
});

function shiftFocus(index) {
  if (inputs[index].value !== "" && index < inputs.length - 1) {
    const currentInput = inputs[index];
    const nextInput = inputs[index + 1];
    
    // Explicitly manage classes
    currentInput.classList.remove("focused");
    nextInput.focus();
    nextInput.classList.add("focused");
  }
}

function unshiftFocus(e, index) {
  if (e.key === "Backspace" && index > 0) {
    e.preventDefault();
    const currentInput = inputs[index];
    const prevInput = inputs[index - 1];
    
    currentInput.value = "";
    currentInput.classList.remove("focused");
    prevInput.focus();
    prevInput.classList.add("focused");
  }
}






