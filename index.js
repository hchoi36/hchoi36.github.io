const words = ["Security.", "DevOps." , "CI/CD."];
let i = 0;
let timer;

var apigClient = apigClientFactory.newClient({
    apiKey: 'fAYgnifsJu5CNNdilSQF92iSd5NxVuo68GY2g01l'
});

function subscribe(){
	var email = document.getElementById("email-subscription").value
	var body = {
		"email": email
	};
	var params = {
	};
	var additionalParams = {
		//If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
		headers: {
		},
		queryParams: {
		}
	};
	  apigClient.subscribePost(params, body, additionalParams)
	  .then(function(result){
	  	if (result.data.statusCode==200)
	  	{
			document.getElementById("popup-header").innerText="Success";
			document.getElementById("popup-header").style.backgroundColor="yellowgreen";
			document.getElementById("popup").style.display = "block";
	  	}
	  	else 
	  	{
			document.getElementById("popup-header").innerText="Failure";
			document.getElementById("popup-header").style.backgroundColor="#ff4b36";
			document.getElementById("popup").style.display = "block";
	 	 }
	 	 document.getElementById("popup-content").innerText=result.data.body;
	  })
	  .catch(function(result){
		document.getElementById("popup-header").innerText="Failure";
		document.getElementById("popup-header").style.backgroundColor="#ff4b36";
		document.getElementById("popup-content").innerText="Oops!! Looks like we had an unexpectd error. Please forgive us. ";
		document.getElementById("popup").style.display = "block";	
	  });
}

function closePopup() {
	document.getElementById("popup").style.display = "none";
  }
  

 

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById("word").innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};


function submitVolunteer() {
	var firstNameInput = document.getElementById("firstNameVolunteerInput").value;
	var lastNameInput = document.getElementById("lastNameVolunteerInput").value;
	var emailInput = document.getElementById("emailVolunteerInput").value;
	var textInput = document.getElementById("textVolunteerInput").value;

	var administrativeWorkInput = document.getElementById("administrativeWorkVolunteerInput").checked;
	var EducationServicesInput = document.getElementById("educationServicesVolunterInput").checked;
	var healthServicesInput = document.getElementById("healthServicesVolunteerInput").checked;
	var leavingTheJarVolunteerInput = document.getElementById("leavingTheJarVolunteerInput").checked;
	var otherInput = document.getElementById("otherVolunteerInput").checked;

	var isChecked = administrativeWorkInput || EducationServicesInput || healthServicesInput || leavingTheJarVolunteerInput || otherInput;

	document.getElementById("firstNameVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("lastNameVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("emailVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("textVolunteerInput").style.borderColor="#e5e5e5";

	document.getElementById("administrativeWorkVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("educationServicesVolunterInput").style.borderColor="#e5e5e5";
	document.getElementById("healthServicesVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("leavingTheJarVolunteerInput").style.borderColor="#e5e5e5";
	document.getElementById("otherVolunteerInput").style.borderColor="#e5e5e5";

	if (firstNameInput.length==0) {
		document.getElementById("firstNameVolunteerInput").style.borderColor="#ff0000";
	}
	if (lastNameInput.length==0) {
		document.getElementById("lastNameVolunteerInput").style.borderColor="#ff0000";
	}
	if (emailInput.length==0) {
		document.getElementById("emailVolunteerInput").style.borderColor="#ff0000";
	}
	if (!isChecked)
	{
		document.getElementById("administrativeWorkVolunteerInput").style.borderColor="#ff0000";
		document.getElementById("educationServicesVolunterInput").style.borderColor="#ff0000";
		document.getElementById("healthServicesVolunteerInput").style.borderColor="#ff0000";
		document.getElementById("leavingTheJarVolunteerInput").style.borderColor="#ff0000";
		document.getElementById("otherVolunteerInput").style.borderColor="#ff0000";
	}
	if (firstNameInput.length>0 && lastNameInput.length>0 && emailInput.length>0 && isChecked)
	{
		var volunteerType = [];
		if (administrativeWorkInput) volunteerType.push("Administrative Work")
		if (EducationServicesInput) volunteerType.push("Education Services")
		if (healthServicesInput) volunteerType.push("Health Services")
		if (leavingTheJarVolunteerInput) volunteerType.push("Leaving The Jar")
		if (otherInput) volunteerType.push("other")

		var body = {
			"firstName": firstNameInput, 
			"lastName": lastNameInput, 
			"email": emailInput, 
			"textInput": textInput, 
			"volunteerType": volunteerType, 
		};
		var params = {
		};
		var additionalParams = {
			//If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
			headers: {
			},
			queryParams: {
			}
		};
		apigClient.volunteerPost(params, body, additionalParams)
		.then(function(result){
			if (result.data.statusCode==200)
			{
				document.getElementById("popup-header").innerText="Success";
				document.getElementById("popup-header").style.backgroundColor="yellowgreen";
				document.getElementById("popup").style.display = "block";
			}
			else 
			{
				document.getElementById("popup-header").innerText="Failure";
				document.getElementById("popup-header").style.backgroundColor="#ff4b36";
				document.getElementById("popup").style.display = "block";
			}
			document.getElementById("popup-content").innerText=result.data.body;
		})
		.catch(function(result){
			document.getElementById("popup-header").innerText="Failure";
			document.getElementById("popup-header").style.backgroundColor="#ff4b36";
			document.getElementById("popup-content").innerText="Oops!! Looks like we had an unexpectd error. Please forgive us. ";
			document.getElementById("popup").style.display = "block";	
		});
	}
}


function contactUs() {
	var firstNameInput = document.getElementById("firstNameContact").value;
	var lastNameInput = document.getElementById("lastNameContact").value;
	var emailInput = document.getElementById("emailContact").value;
	var textInput = document.getElementById("messageContact").value;

	var donationsContact = document.getElementById("donationsContact").checked;
	var professionalContact = document.getElementById("professionalContact").checked;
	var becomeMissionaryContact = document.getElementById("becomeMissionaryContact").checked;
	var organizingATripContact = document.getElementById("organizingATripContact").checked;
	var otherInput = document.getElementById("otherContact").checked;

	var isChecked = donationsContact || professionalContact || becomeMissionaryContact || organizingATripContact || otherInput;

	document.getElementById("firstNameContact").style.borderColor="#e5e5e5";
	document.getElementById("lastNameContact").style.borderColor="#e5e5e5";
	document.getElementById("emailContact").style.borderColor="#e5e5e5";
	document.getElementById("messageContact").style.borderColor="#e5e5e5";

	document.getElementById("donationsContact").style.borderColor="#e5e5e5";
	document.getElementById("professionalContact").style.borderColor="#e5e5e5";
	document.getElementById("becomeMissionaryContact").style.borderColor="#e5e5e5";
	document.getElementById("organizingATripContact").style.borderColor="#e5e5e5";
	document.getElementById("otherContact").style.borderColor="#e5e5e5";

	if (firstNameInput.length==0) {
		document.getElementById("firstNameContact").style.borderColor="#ff0000";
	}
	if (lastNameInput.length==0) {
		document.getElementById("lastNameContact").style.borderColor="#ff0000";
	}
	if (emailInput.length==0) {
		document.getElementById("emailContact").style.borderColor="#ff0000";
	}
	if (textInput.length==0) {
		document.getElementById("messageContact").style.borderColor="#ff0000";
	}
	if (!isChecked)
	{
		document.getElementById("donationsContact").style.borderColor="#ff0000";
		document.getElementById("professionalContact").style.borderColor="#ff0000";
		document.getElementById("becomeMissionaryContact").style.borderColor="#ff0000";
		document.getElementById("organizingATripContact").style.borderColor="#ff0000";
		document.getElementById("otherContact").style.borderColor="#ff0000";
	}
	if (firstNameInput.length>0 && lastNameInput.length>0 && emailInput.length>0 && isChecked)
	{
		var contactType = [];
		if (donationsContact) contactType.push("Donations");
		if (professionalContact) contactType.push("Professional services");
		if (becomeMissionaryContact) contactType.push("Become a missionary");
		if (organizingATripContact) contactType.push("Organizing a trip");
		if (otherInput) contactType.push("other")

		var body = {
			"firstName": firstNameInput, 
			"lastName": lastNameInput, 
			"email": emailInput, 
			"message": textInput, 
			"messageType": contactType, 
		};
		var params = {
		};
		var additionalParams = {
			//If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
			headers: {
			},
			queryParams: {
			}
		};
		apigClient.contactPost (params, body, additionalParams)
		.then(function(result){
			if (result.data.statusCode==200)
			{
				document.getElementById("popup-header").innerText="Success";
				document.getElementById("popup-header").style.backgroundColor="yellowgreen";
				document.getElementById("popup").style.display = "block";

				document.getElementById("firstNameContact").value="";
				document.getElementById("lastNameContact").value="";
				document.getElementById("emailContact").value="";
				document.getElementById("messageContact").value="";
			
				document.getElementById("donationsContact").checked=true;
				document.getElementById("professionalContact").checked=false;
				document.getElementById("becomeMissionaryContact").checked=false;
				document.getElementById("organizingATripContact").checked=false;
				document.getElementById("otherContact").checked=false;
			}
			else 
			{
				document.getElementById("popup-header").innerText="Failure";
				document.getElementById("popup-header").style.backgroundColor="#ff4b36";
				document.getElementById("popup").style.display = "block";
			}
			document.getElementById("popup-content").innerText=result.data.body;
		})
		.catch(function(result){
			document.getElementById("popup-header").innerText="Failure";
			document.getElementById("popup-header").style.backgroundColor="#ff4b36";
			document.getElementById("popup-content").innerText="Oops!! Looks like we had an unexpectd error. Please forgive us. ";
			document.getElementById("popup").style.display = "block";	
		});
	}
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("open-navbar-button").style.transition = "0.3s";
	document.getElementById("open-navbar-button").style.display = "none";
  }
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("open-navbar-button").style.transition = "0.3s";
	document.getElementById("open-navbar-button").style.display = "block";

}

window.addEventListener("click", function(event) {
	if (document.getElementById("popup").style.display == "block"){
		document.getElementById("popup").style.display = "none";
	}
});

typingEffect();
