const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Constants to select the different "id"
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const imageBanner = document.getElementById("banner-img");
const taglineBanner = document.getElementById("banner-tagline");
const dots = document.getElementById("dots");

// Event on click on the left arrow
arrowLeft.addEventListener('click',slidePrevious);
// Event on click on the right arrow
arrowRight.addEventListener('click',slideNext); 

// For loop to create as many "div" with a class "dot" as there are objects in the array
for(let i = 0; i< slides.length; i++){ 
	const dotDiv = document.createElement("div");
	dotDiv.className = "dot";  
	dots.appendChild(dotDiv); //Attaching the div tag to its parent 
}
// Constant to select all ".dot" classes
const allTheDots = document.querySelectorAll(".dot"); 
// Added class dot_select on the first "dot"
allTheDots[0].classList.add("dot_selected"); 

// Initialization of the index variable to 0
let index = 0; 

// Function to add the image, the tagline and add the selected point according to the index
function changeBanner(){
	imageBanner.src = "./assets/images/slideshow/" + slides[index].image;
	taglineBanner.innerHTML = slides[index].tagLine;
	allTheDots[index].classList.add("dot_selected");
}
// Function to delete the selected point
function removeClass(){
	allTheDots[index].classList.remove("dot_selected");
}

const lastSlide = slides.length-1;

/* SlidePrevious function:
1) Call the RemoveClass function
2) Condition if we are on the first image we display the last image, otherwise go back one image
3) Calling the ContentBanner function */
function slidePrevious(){
	removeClass();
	if(index === 0){
		index = lastSlide;
	}else{
		index --;
	};
	changeBanner();
}

/* Fonction SlideNext:
1) Idem
2) Do the opposite, if you are on the last image, you display the first image, otherwise go forward one image 
3) Idem */
function slideNext (){
	removeClass();
	if (index === lastSlide){
		index = 0;
	}else{
		index ++;
	};	
	changeBanner();
}





