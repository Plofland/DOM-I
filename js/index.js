const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"])


// Nav Bar-----------------------------------------------------------
// Set Nav Links
let count = 1;
const navLink = document.querySelectorAll("header nav a");
navLink.forEach(item => {
  item.textContent = siteContent.nav[`nav-item-${count}`];
   count++; 
});

// Matthew Justice's Brilliant forEach solution
// navLink.forEach((item, index) => item.textContent = siteContent.nav[`nav-item-${index + 1}`]); 

// Create two items for the Navigation Menu
const newLink = document.createElement("a");
newLink.textContent = "Blog";
newLink.href = "#";
document.querySelector("nav").appendChild(newLink)

const newLink2 = document.createElement("a");
newLink2.textContent = "DOM-a-Llama";
newLink2.href = "#";
document.querySelector("nav").prepend(newLink2);

// Set Nav text color
// let navLinks = document.querySelectorAll("header nav a");
// navLinks.style.fontSize = "5rem";


// Logo Image:--------------------------------------------------------
// Set the new logo image
const newLogoImg = document.getElementById("logo-img");
newLogoImg.setAttribute("src", siteContent.nav["img-src"]);

// cta Section: ------------------------------------------------------
const ctaSection = document.getElementsByClassName("cta");
// Set cta-text h1
ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta.h1.split(" ").join("<br>");
// Set button text
document.querySelector("button").innerHTML = siteContent.cta.button;
// Set image src
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);



// *Main Content Section-----------------------------------------------
// Set all of the h4's
const allH4 = document.querySelectorAll(".text-content h4");
const allH4Array = Array.from(allH4);
// Top Content
allH4[0].innerHTML = siteContent["main-content"]["features-h4"];
allH4[1].innerHTML = siteContent["main-content"]["about-h4"];
// Bottom Content
allH4[2].innerHTML = siteContent["main-content"]["services-h4"];
allH4[3].innerHTML = siteContent["main-content"]["product-h4"];
allH4[4].innerHTML = siteContent["main-content"]["vision-h4"];

// Set all of the p's
const allP = document.querySelectorAll(".text-content p");
const allPArray = Array.from(allP);
// Top Content
allPArray[0].innerHTML = siteContent["main-content"]["features-content"];
allPArray[1].innerHTML = siteContent["main-content"]["about-content"];
// Bottom Content
allPArray[2].innerHTML = siteContent["main-content"]["services-content"];
allPArray[3].innerHTML = siteContent["main-content"]["product-content"];
allPArray[4].innerHTML = siteContent["main-content"]["vision-content"];

// Set Middle Image src
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact Section ----------------------------------------------------------
// Set the h4
const contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];
// Set all of the p's
const contactP = document.querySelectorAll(".contact p");
contactPArray = Array.from(contactP);
contactPArray[0].innerHTML = siteContent["contact"]["address"];
contactPArray[1].innerHTML = siteContent["contact"]["phone"];
contactPArray[2].innerHTML = siteContent["contact"]["email"];

// Footer Section -----------------------------------------------------------
// Set the p
const footerP = document.querySelector("footer p");
footerP.innerHTML = siteContent["footer"]["copyright"]
