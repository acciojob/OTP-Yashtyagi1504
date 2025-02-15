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
	input.addEventListener("keydown", function(){
		unshiftFocus(e,index);
	})
})

function shiftFocus(index){
	inputs[index+1].focus();
}
function unshiftFocus(e,index){
	e.preventDefault();
	if(e.key === "Backspace" && inputs[index].value===""){
		inputs[index-1].focus();
	}
}






