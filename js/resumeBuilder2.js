$(function() {
	var model = {
		bio: [
		{
			name: "Sylvia Schmidt",
			role: "Frontend Web Developer",
			contacts: [
				{
					"mobile": "0163 25 xx 62 0",
					"email": "sylvia.schmidt@jielo.de",
					"github": "spinne",
					"twitter": "None",
					"location": "Burgbernheim"
				}
			],
			welcomeMessage: "Hello, I am happy you are here! Take a look around.",
			skills: [
				"HTML",
				"CSS",
				"JavaScript",
				"Photoshop",
				"Illustrator",
				"Gimp"
			],
			biopic: "images/social.jpg"
		}
		],
		
		schools: [
			{
				"name": "HAW Amberg-Weiden",
				"location": "Amberg",
				"dates": 2010,
				"degree": "Bachelor of Engineering",
				"major": "Media Production and Technology"
			},
			{
				"name": "HAW Amberg-Weiden",
				"location": "Amberg",
				"dates": 2012,
				"degree": "Master of Engineering",
				"major": "Media Production and Technology"
			}
		],
		
		online: [
			{
				"title": "Nanodegree Frontend Web Development",
				"school": "Udacity",
				"date": "2015",
				"url": "http://www.udacity.com"
			}
		],
		
		jobs: [
			{
				"employer": "A Hotel",
				"location": "Rothenburg ob der Tauber",
				"dates": "2013 - Today",
				"title": "Hotel Staff",
				"description": "Something"
			},
			{
				"employer": "An Agency",
				"location": "Hersbruck",
				"dates": "2008-2009",
				"title": "Intern",
				"description": "Something"
			},
			{
				"employer": "A Company",
				"location": "Bad Windsheim",
				"dates": "2007",
				"title": "Intern",
				"description": "Something"
			},
			{
				"employer": "A Company",
				"location": "Eltersdorf",
				"dates": "2006",
				"title": "Intern",
				"description": "Something"
			}
		],
		
		project: [
			{
				"title": "Online Portfolio",
				"description": "My online portfolio built using HTML, CSS and Bootstrap",
				"dates": "2015",
				"images": [
					"images/197x148.gif",
					"images/197x148.gif"
					]
			},
			{
				"title": "Resume",
				"description": "Interactive resume built using HTML, CSS and JavaScript (jQuery)",
				"dates": "2015",
				"images": [
					"images/197x148.gif",
					"images/197x148.gif"
					]
			}
		]
	};
	
	var octupus = {
		init: function() {
			view.init();
		},
		
		getBio: function() {
			return $(model.bio);
		},
		
		getSchools: function() {
			return $(model.schools);
		},
		
		getOnline: function() {
			return $(model.online);
		},
		
		getJobs: function() {
			return $(model.jobs);
		},
		
		getProjects: function() {
			return $(model.project);
		}
	};
	
	var view = {
		init: function() {
			this.render();
		},
		
		render: function() {
			var bio = octupus.getBio();
			var education = octupus.getSchools();
			var online = octupus.getOnline();
			var work = octupus.getJobs();
			var projects = octupus.getProjects();
			
			/* Bio */
			for (var i = 0; i < bio.length; i++){
			/* Display Name, Role, Picture and Welcome Massage in Header*/
			var formattedName = HTMLheaderName.replace("%data%", bio[i].name);
			var formattedRole = HTMLheaderRole.replace("%data%", bio[i].role);
			var formattedPicture = HTMLbioPic.replace('%data%', bio[i].biopic);
			var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio[i].welcomeMessage);

			$('#header').prepend(formattedRole);
			$('#header').prepend(formattedName);
			$('#header').append(formattedPicture);
			$('#header').append(formattedWelcome);


			/* Add contacts to top and footer*/
			if (bio[i].contacts.length > 0) {
				for (var entry = 0; entry < bio[i].contacts.length; entry++){
					var formattedEmail = HTMLemail.replace('%data%', bio[i].contacts[entry].email);
					var formattedMobile = HTMLmobile.replace('%data%', bio[i].contacts[entry].mobile);
					var formattedTwitter = HTMLtwitter.replace('%data%', bio[i].contacts[entry].twitter);
					var formattedGithub = HTMLgithub.replace('%data%', bio[i].contacts[entry].github);
					var formattedLocation = HTMLlocation.replace('%data%', bio[i].contacts[entry].location);

					$('#topContacts').append(formattedEmail + formattedMobile + formattedTwitter + formattedGithub + formattedLocation);
					$('#footerContacts').append(formattedEmail + formattedMobile + formattedTwitter + formattedGithub + formattedLocation);
				}
			}


			/* Add skills list to header */
			if (bio[i].skills.length > 0) {
				$('#header').append(HTMLskillsStart);
				var formattedSkill = '';
				for (var skill = 0; skill < bio[i].skills.length; skill++) {
					formattedSkill = HTMLskills.replace('%data%', bio[i].skills[skill]);
					$('#skills').append(formattedSkill);
				}
			}
			}
			
			/* Education */
			for (var school = 0; school < education.length; school++) {
				$('#education').append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace('%data%', education[school].name);
				var formattedDegree = HTMLschoolDegree.replace('%data%', education[school].degree);
				var formattedDates = HTMLschoolDates.replace('%data%', education[school].dates);
				var formattedLocation = HTMLschoolLocation.replace('%data%', education[school].location);
				var formattedMajor = HTMLschoolMajor.replace('%data%', education[school].major);
				var formattedSchool = formattedName + formattedDegree;

				$('.education-entry:last').append(formattedSchool + formattedDates + formattedLocation + formattedMajor);
			}
			
			/* Online Education */
			if (online.length > 0) {
				$('#education').append(HTMLonlineClasses);

				for (var school = 0; school < online.length; school++) {
					$('#education').append(HTMLschoolStart);

					var formattedTitle = HTMLonlineTitle.replace('%data%', online[school].title);
					var formattedSchool = HTMLonlineSchool.replace('%data%', online[school].school);
					var formattedDates = HTMLonlineDates.replace('%data%', online[school].date);
					var formattedURL = HTMLonlineURL.replace('%data%', online[school].url);
					var formattedClass = formattedTitle + formattedSchool;

					$('.education-entry:last').append(formattedClass + formattedDates + formattedURL);
				}
			}
			
			/* Work */
			for (var job = 0; job < work.length; job++) {
				$('#workExperience').append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace('%data%', work[job].employer);
				var formattedTitle = HTMLworkTitle.replace('%data%', work[job].title);
				var formattedDates = HTMLworkDates.replace('%data%', work[job].dates);
				var formattedLocation = HTMLworkLocation.replace('%data%', work[job].location);
				var formattedDescription = HTMLworkDescription.replace('%data%', work[job].description);
				var formattedJob = formattedEmployer + formattedTitle;

				$('.work-entry:last').append(formattedJob + formattedDates + formattedLocation + formattedDescription);
			}

			/* Projects */
			for (var entry = 0; entry < projects.length; entry++) {
				$('#projects').append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace('%data%', projects[entry].title);
				var formattedDates = HTMLprojectDates.replace('%data%', projects[entry].dates);
				var formattedDescription = HTMLprojectDescription.replace('%data%', projects[entry].description);

				$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

				for (var i = 0; i < projects[entry].images.length; i ++) {
					var formattedImage = HTMLprojectImage.replace('%data%', projects[entry].images[i]);
					$('.project-entry:last').append(formattedImage);
				}
			}
			
			
			
			/* Add Map */
			$('#map-div').append(googleMap);
			
			
			/* Additional Interaction: Accordion Function of sections */
			$('#workExperience > h2').addClass('accordion').append('<span class="closeMarker closed"> ˅ </span>').append('<span class="closeMarker"> x </span>');
			$('#workExperience').click(function(){
				$('#workExperience > h2 > span').toggleClass('closed');
				$('.work-entry').toggle();
			});

			$('#projects > h2').addClass('accordion').append('<span class="closeMarker closed"> ˅ </span>').append('<span class="closeMarker"> x </span>');
			$('#projects').click(function(){
				$('#projects > h2 > span').toggleClass('closed');
				$('.project-entry').toggle();
			});

			$('#education > h2').addClass('accordion').append('<span class="closeMarker closed"> ˅ </span>').append('<span class="closeMarker"> x </span>');
			$('#education').click(function(){
				$('#education > h2 > span').toggleClass('closed');
				$('div#education > h3').toggle();
				$('.education-entry').toggle();
			});


			/*Adding elements and classes to change layout + look with CSS */
			$('head').append('<link href="http://fonts.googleapis.com/css?family=Lato|Merriweather:300" rel="stylesheet">');

			$('#header > span').addClass('subtitle');
		}
	};
	
	octupus.init();
});