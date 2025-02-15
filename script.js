// let inputs = document.querySelectorAll("input");
// inputs.forEach(input => {
// 	input.addEventListener("input",shiftFocus);
// 	// input.addEventListener("keydown",unshiftFocus);
// })
// function shiftFocus(){
// 	for(let i = 0;i<inputs.length;i++){
// 		if(inputs[i].value !== ""){
// 			inputs[i+1].focus();
// 		}
// 	}
	
// }
// // document.addEventListener("keydown",unshiftFocus);
// function unshiftFocus(e){	
// 		for(let i = 0;i<inputs.length;i++){
// 			if(inputs[i].value === "" && e.key === "Backspace"){
// 				inputs[i-1].focus();
				
// 			}	
//	 	}
// }

let inputs = document.querySelectorAll("input");

inputs.forEach((input,index) => {
	input.addEventListener("input",function(){
		shiftFocus(index);
	})
	input.addEventListener("keydown", function(e){
		unshiftFocus(e,index);
	})
})

function shiftFocus(index){
	// inputs[index+1].focus();
	if (inputs[index].value !== "" && index < inputs.length - 1) {
        inputs[index + 1].focus(); // Move to next input only if there is space
    }
}
function unshiftFocus(e,index){
	
	// if(e.key === "Backspace" && inputs[index].value===""){
	// 	e.preventDefault();
	// 	inputs[index-1].focus();
	// }
	if (e.key === "Backspace" && inputs[index].value === "" && index > 0) {
        e.preventDefault(); // Prevents backspace default action
        inputs[index - 1].focus(); // Move focus to previous input
    }
}






