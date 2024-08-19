function myMenuFunction(){
  var menuBth = document.getElementById("myNavMenu");

  if(menuBth.className === "nav-menu"){
    menuBth.className += "responsive";
  } else{
    menuBth.className = "nav-menu";
  };
};
  //change mode
document.addEventListener('DOMContentLoaded', () =>{
  const toggle = document.getElementById('moon');

  toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark-containt');
    toggle.textContent = document.body.classList.contains('dark-containt') ? '☀️' : '🌙';
  });
});
// typing effect 


var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// scroll animation

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", {dalay: 100});
sr.reveal(".text-info", {delay:150});
sr.reveal(".text-btn", {delay:170});
sr.reveal(".text-info", {delay:200});
sr.reveal(".social_icons", {delay:220});
sr.reveal(".featured-image", {delay:250});
sr.reveal(".project-box", {interval:280});


sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
})

srLeft.reveal(".about-info", {delay: 100})
srLeft.reveal(".contact-info", {delay: 100})



const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
})

srRight.reveal(".skill", {delay: 100})
srRight.reveal(".skill-box", {delay: 100})
srRight.reveal(".form-control", {delay: 100})
