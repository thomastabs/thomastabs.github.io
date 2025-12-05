var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.querySelector(".fa-bars");

function openmenu(){
    sidemenu.style.right = "0";
    if(menuIcon) menuIcon.style.display = "none";
}

function closemenu(){
    sidemenu.style.right = "-240px";
    if(menuIcon) menuIcon.style.display = "block";
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if(sidemenu && menuIcon) {
        const isClickInsideMenu = sidemenu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        const menuOpen = sidemenu.style.right === "0px";
        
        if(!isClickInsideMenu && !isClickOnMenuIcon && menuOpen) {
            closemenu();
        }
    }
});

// Contact Slider Functionality
let currentSlide = 0;

function updateSlider() {
    const contactSlider = document.getElementById("contactSlider");
    const prevSlide = document.getElementById("prevSlide");
    const nextSlide = document.getElementById("nextSlide");
    
    if (!contactSlider || !prevSlide || !nextSlide) return;
    
    if (currentSlide === 0) {
        contactSlider.classList.remove("show-form");
        prevSlide.classList.add("disabled");
        nextSlide.classList.remove("disabled");
    } else {
        contactSlider.classList.add("show-form");
        nextSlide.classList.add("disabled");
        prevSlide.classList.remove("disabled");
    }
}

function showContactInfo() {
    currentSlide = 0;
    updateSlider();
}

function showContactForm() {
    currentSlide = 1;
    updateSlider();
}

// Initialize when page loads
window.addEventListener('load', function() {
    const prevSlide = document.getElementById("prevSlide");
    const nextSlide = document.getElementById("nextSlide");
    
    if (prevSlide && nextSlide) {
        prevSlide.onclick = showContactInfo;
        nextSlide.onclick = showContactForm;
        updateSlider();
    }
});

// Form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIbk1KSab9FIKAS0QMZMZb0vlIg6tX57to-17kfwOi2DGsCuTT2b5ESucfGfb6QRrY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    
    submitBtn.innerHTML = "Sending..."
    submitBtn.disabled = true
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        submitBtn.innerHTML = "Sent!"
        setTimeout(function(){
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
            form.reset()
        }, 2000)
    })
    .catch(error => {
        console.error('Error!', error.message)
        submitBtn.innerHTML = "Error - Try Again"
        setTimeout(function(){
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
        }, 2000)
    })
})
