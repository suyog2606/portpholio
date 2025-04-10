  let t1=gsap.timeline();

  t1.from(".nav h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1
  })
  t1.from(".nav h3",{
    y:-60,
    opacity:0,
    duration:0.5,
    delay:0,
    stagger:0.5
  })

  let darkmode= document.getElementById("dark-mode");
  darkmode.addEventListener("click",function(){  
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
  })

						// Initialize the typing animation
						const typingAnimationElement = document.getElementById('typing-animation');

						// Create an array of typing text
						const typingTexts = [
						'IT   Engineer  ',
						'FRONT-END DEVELOPER',
						'JAVA DEVELOPER',
						];

						// Create a function to display the typing animation for a given text
						function playTypingAnimation(text) {
						// Loop through each character and add it to the element
						for (let i = 0; i < text.length; i++) {
							setTimeout(() => {
							typingAnimationElement.textContent += text[i];
							}, i * 200); // Increase the delay to slow down the typing animation
						}

						// Once the animation is complete, reset the text and start over
						setTimeout(() => {
							typingAnimationElement.textContent = '';
							playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
						}, text.length * 200);
						}

						// Start the typing animation loop
						playTypingAnimation(typingTexts[0]);

gasp.from(".content h2",{
    y:-30,
    opacity:0,
duration:0.5 ,
delay:1   
})
// for smooth scrolling
document.querySelectorAll('a[herf^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('herf')).
        scrollIntoView({
            behaviour:"smooth"
        })
    })
})

// from
let myForm=document.querySelector("#myForm");

myForm.addEventListener("submit" ,function(e){ 
e.preventDefault();
})

document.getElementById("html").addEventListener("click", function () {
  const image = this;
  const currentSrc = image.getAttribute("src");

  // Swap between two images
  if (currentSrc === "image1.jpg") {
    image.setAttribute("src", "html.jpeg");
  } else {
    image.setAttribute("src", "spring.jpeg");
  }
});
