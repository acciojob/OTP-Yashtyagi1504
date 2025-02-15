// input.addEventListener("focus", ()=>{
 //        input.classList.add("focused");
 //    });

 //    input.addEventListener("blur", () => {
 //        input.classList.remove("focused");
 //    });


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






