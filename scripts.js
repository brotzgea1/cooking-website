document.getElementById("form").addEventListener("submit", validation);
 
function validation(){
	event.preventDefault();
	let email = document.forms["validate"]["email"].value;
	let at = email.indexOf("@");
	let point = email.lastIndexOf(".");
	let non = document.getElementById("invalid");
	let oui = document.getElementById("valid");
	
		if(at < 1 || point < (at + 2) || (point + 2) >= email.length){
		non.style.display = "block";
		oui.style.display = "none";
		return false;
		} else {
		oui.style.display = "block";
		non.style.display = "none";
		return false;
		}
};

function ToggleNavItems(){
	let navItems = document.querySelectorAll("nav > li");
	for(let i=0; i < navItems.length; i++){
		navItems[i].classList.toggle("visible-nav-items");
	};
	console.log("hello")
}











