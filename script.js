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
	input.addEventListener("focus", () => {
        input.classList.add("focused"); // Add class on focus
    });

    input.addEventListener("blur", () => {
            input.classList.remove("focused"); // Remove class on blur
        });
})

function shiftFocus(index){
	if (inputs[index].value !== "" && index<inputs.length - 1) {
        inputs[index + 1].focus(); 

    }
}
function unshiftFocus(e,index){

	if(e.key === "Backspace" && index>0){
		e.preventDefault();
		inputs[index].value="";
		inputs[index-1].focus();
	}
}






