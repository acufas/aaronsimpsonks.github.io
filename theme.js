let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/moon.svg\" width=\"15px\" />";
} else {
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/sun.svg\" width=\"15px\" />";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/moon.svg\" width=\"15px\" />";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/sun.svg\" width=\"15px\" />";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "<img src=\"images/sun.svg\" width=\"15px\" />";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "<img src=\"images/moon.svg\" width=\"15px\" />";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "<img src=\"images/sun.svg\" width=\"15px\" />";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "<img src=\"images/moon.svg\" width=\"15px\" />";
	}
}
if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/moon.svg\" width=\"15px\" />";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "<img src=\"images/sun.svg\" width=\"15px\" />";
}