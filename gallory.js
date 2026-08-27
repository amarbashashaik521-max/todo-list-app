
let images = ["welcome.jpeg" , "rohit2.jpeg" , "rohit sharma.jpeg" , "rohit4.jpeg" ,"end.jpeg"];

let current=0;
document.getElementById("image").src = images[current];
function next()
{
	current=current+1; 
	        
	if(current >= images.length)
	{
    		current = 0;
	}	
	document.getElementById("image").src = images[current];
        document.getElementById("page-num").innerHTML="Image - " + (current + 1) + "/ 5" ;
} 
function previous()
{
	current=current - 1;
	if(current < 0)
  	{
    		current = images.length - 1;
	}

	document.getElementById("image").src = images[current];
        document.getElementById("page-num").innerHTML="Image - " + (current + 1) + "/ 5" ;
}
