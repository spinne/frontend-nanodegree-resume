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
			"discription": "My online portfolio built using HTML, CSS and Bootstrap",
			"link": "http://jielo.de",
			"picture": "images/folio.jpg"
		},
		{
			"title": "Resume",
			"discription": "Interactive resume built using HTML, CSS and JavaScript (jQuery)",
			"link": "http://jielo.de",
			"picture": "images/resume.jpg"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	var formattedSkill = '';
	for(skill in bio.skills){
		formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill);
	}
};




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