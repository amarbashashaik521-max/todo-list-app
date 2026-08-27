
function add()
{
       
	let result=document.getElementById("todo").value;
        if(result == ""){
	      	document.getElementById("todo").value = "";
	}
	else{
		let ul = document.getElementById("add");
		let li = document.createElement("li");
		li.innerHTML = result;
		ul.appendChild(li);

		let btn = document.createElement("button");
		btn.onclick = function()
		{
 
			this.parentElement.remove();
			
		}
		btn.innerHTML = "DELETE";
		li.appendChild(btn);

		document.getElementById("todo").value = "";	

	}

 }
	


