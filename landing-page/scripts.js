
function scrollto(){
	document.querySelector("#callbackcard").scrollIntoView(true);

}
	

function scrollaboutus(){
	document.querySelector("body > div.wrapper > div.about-section > h2").scrollIntoView(true);
}

function scrollearnings(){
	document.querySelector("body > div.wrapper > div.roi-section > div.roi-title > h2").scrollIntoView(true);
}

function scrollproducts(){
	document.querySelector("body > div.wrapper > div.mining-rigs-section > div.rigs-title").scrollIntoView(true);
}

function scrollhow(){
	document.querySelector("body > div.wrapper > div.journey-section > h2").scrollIntoView(true);
}

function scrolltop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
