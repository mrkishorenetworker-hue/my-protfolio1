// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar Active Link on Scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 200;
  document.querySelectorAll('section').forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sec.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Typing Effect in Hero
const typingText = document.querySelector(".typing");
const textArray = ["Web Developer", "State Handball Player", "Marathon Finisher"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typingText.textContent = textArray[arrayIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});

// EmailJS Integration
(function(){
  emailjs.init("ShCQYHy1yIBu8aS5L"); // replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_118fge2", "template_we1g3o4", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error(error);
    });
});
   
