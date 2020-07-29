// ///// Email Validation///////////

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
////////Hamburger Menu////////////

function ToggleNavItems(){
	let navItems = document.getElementsByClassName("main-nav");
	for(let i=0; i < navItems.length; i++){
		navItems[i].classList.toggle("visible-nav-item");
	};
};



function ToggleCardInfo(){
	let cardItems = document.getElementsByClassName("card-info");
	for(let i=0; i < cardItems.length; i++){
		cardItems[i].classList.toggle("visible-card-info");
	};
	expandCard();
};

function expandCard(){
	let card = document.getElementsByClassName("card");
	for(let i=0; i < card.length; i++){
		card[i].style.width = "90%";
		}
};

function collapseCard(){
	let card = document.getElementsByClassName("card");
	for(let i=0; i < card.length; i++){
		card[i].style.width = "20%";
	}
	console.log("hello");
};












