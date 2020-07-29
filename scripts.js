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

// /////////Recipe Card/////////

function ToggleCardInfo(){
	let cardItems = document.getElementsByClassName("card-info");
	for(let i=0; i < cardItems.length; i++){
		cardItems[i].classList.toggle("visible-card-info");
	};
	expandCard();
};

function ToggleCardInfoOff(){
	let cardItems = document.getElementsByClassName("card-info");
	for(let i=0; i < cardItems.length; i++){
		cardItems[i].classList.toggle("visible-card-info");
	};
	collapseCard();
};

function expandCard(){
	let card = document.getElementsByClassName("card");
	let icon = document.getElementsByClassName("fas fa-arrow-circle-down");
	let icon2 = document.getElementsByClassName("fas fa-arrow-circle-up");
	for(let i=0; i < card.length; i++){
		card[i].style.width = "600px";
		};
	for(let i=0; i < icon.length; i++){
		icon[i].style.visibility = "hidden";
		};
	for(let i=0; i < icon2.length; i++){
		icon2[i].style.visibility = "visible";
		};
};

function collapseCard(){
	let card = document.getElementsByClassName("card");
	let icon = document.getElementsByClassName("fas fa-arrow-circle-down");
	let icon2 = document.getElementsByClassName("fas fa-arrow-circle-up");
	for(let i=0; i < card.length; i++){
		card[i].style.width = "300px";
	};
	for(let i=0; i < icon.length; i++){
		icon[i].style.visibility = "visible";
		};
	for(let i=0; i < icon2.length; i++){
		icon2[i].style.visibility = "hidden";
		};
	console.log("hello");
};












