let message = "Hello, User! You are welcome to Abhyudaya Ashish Agrawal's website.";
let splash = document.querySelector("#splash_screen");

document.addEventListener("DOMContentLoaded", (e)=>removesplashscreen());

function removesplashscreen()
{
	setTimeout(()=>splash.classList.add("display-none"), 2000);
}

function playinfo()
{
	alert(message);
}

function playhobbiesinfo()
{
	alert(message + " " + "This is my hobbies page.");
}

function playcertificationsinfo()
{
	alert(message + " " + "This is my certifications page.");
}

function playbloginfo()
{
	alert(message + " " + "This is my Tech Blog's page. Scroll down for my blog's different pages.");
}