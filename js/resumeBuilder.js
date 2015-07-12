/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	"name": "Sylvia Schmidt",
	"role": "Frontend Web Developer",
	"contact": [
		{
			"email": "sylvia.schmidt@jielo.de",
			"web": "sylvia.jielo.de",
			"mobile": "0163 25 91 62 0"
		}
	],
	"picture": "/images/picture.jpg",
	"welcome": "Hey, I am happy you are here! Let me show you a few things:",
	"skills": ["HTML", "CSS", "JS", "Photoshop", "Illustrator", "Gimp"]
};

var education = {
	"schools": [
		{
			"name": "HAW Amberg-Weiden",
			"city": "Amberg",
			"years": "2006-2010",
			"degree": "Bachelor of Engineering",
			"major": "Media Production and Technology"
		},
		{
			"name": "HAW Amberg-Weiden",
			"city": "Amberg",
			"years": "2010-2012",
			"degree": "Master of Engineering",
			"major": "Media Production and Technology"
		}
	],
	"online": [
		{
			"name": "Udacity",
			"city": "Online",
			"years": "2015",
			"degree": "Nanodegree",
			"major": "Frontend Web Development"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Hotel-Gasthof Goldener Greifen",
			"city": "Rothenburg ob der Tauber",
			"years": "2013 - Today",
			"title": "Hotel Staff",
			"description": "Something"
		},
		{
			"employer": "Agentur Frischdenker",
			"city": "Hersbruck",
			"years": "2008-2009",
			"title": "Intern",
			"description": "Something"
		},
		{
			"employer": "AdRoom GmbH",
			"city": "Bad Windsheim",
			"years": "2008",
			"title": "Intern",
			"description": "Something"
		}
	]
};

var projects = {
	"project": [
		{
			"title": "Online Portfolio",
			"description": "My online portfolio built using HTML, CSS and Bootstrap",
			"date": "2015",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
				]
		},
		{
			"title": "Resume",
			"description": "Interactive resume built using HTML, CSS and JavaScript (jQuery)",
			"date": "2015",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
				]
		}
	]
};

/* Display Name and Role in Header */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* Add skills list to header */
if(bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	var formattedSkill = '';
	for(skill in bio.skills){
		formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill);
	}
};

/* Function to display Work Experience */
function displayWork(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].years);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].city);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle;
		
		$('.work-entry:last').append(formattedJob + formattedDates + formattedLocation + formattedDescription);
	}
}

displayWork();

/* Adding International Button and Function */
function inName(){
	var name = bio.name;
	name = name.trim();
	var nameArray = name.split(' ');
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	lastName = nameArray[1].toUpperCase();
	name = firstName + ' ' + lastName;
	return name
}

$('#main').append(internationalizeButton);

/* Displaying the Project */
projects.display = function(){
	for(entry in projects.project){
		$('#projects').append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[entry].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.project[entry].date);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[entry].description);
		
		$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);
		
		for(var i = 0; i < projects.project[entry].images.length; i ++){
			var formattedImage = HTMLprojectImage.replace('%data%', projects.project[entry].images[i]);
			$('.project-entry:last').append(formattedImage);
		}
	}
}

projects.display();

/* Snippets from Lesson 1

$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name);


var work = {};
work.position = "Hotel Staff";
work.employer = "Hotel-Gasthof Goldener Greifen";
work.years = "2013 - today";
work.city = "Rothenburg o. d. Tauber";

var education = {};
education["name"] = "HAW Amberg-Weiden";
education["years"] = "2010-2012";
education["city"] = "Amberg";

$("#main").append("Sylvia");
var awsomeThoughts = "I am Sylvia and I am AWESOME!";
console.log(awsomeThoughts);

var funThoughts = awsomeThoughts.replace("AWESOME", "fun");
$("#main").append(funThoughts);
$("#main").append(awsomeThoughts);

*/