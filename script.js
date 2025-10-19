// Navbar highlight on click
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Button click action (can redirect or open modal)
document.querySelector('.read-more').addEventListener('click', () => {
  // Scrolls to the booking section when clicked
  document.querySelector('.booking-section').scrollIntoView({ behavior: 'smooth' });
});

// Hero Section Carousel with Changing Background Images
const backgroundImages = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1506794778202-b2f7a0b3d1b6?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1517596898436-b52e04e902b7?auto=format&fit=crop&w=1920&q=80'
];

const textSlides = document.querySelectorAll('.slide');
const heroSection = document.querySelector('.hero');
let currentSlide = 0;
let bgElements = [];

// Create background elements dynamically
backgroundImages.forEach((image, index) => {
  const bgDiv = document.createElement('div');
  bgDiv.classList.add('hero-background');
  bgDiv.style.backgroundImage = `url('${image}')`;
  if (index === 0) {
    bgDiv.classList.add('active');
  }
  heroSection.prepend(bgDiv);
  bgElements.push(bgDiv);
});

function showNextSlide() {
  textSlides[currentSlide].classList.remove('active');
  bgElements[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide + 1) % textSlides.length;

  textSlides[currentSlide].classList.add('active');
  bgElements[currentSlide].classList.add('active');
}

// Change slide every 5 seconds (5000 milliseconds)
setInterval(showNextSlide, 5000);


// Navbar highlight on click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Hero button click action
document.querySelector('.btn-hero').addEventListener('click', (e) => {
  e.preventDefault(); // Prevents link from jumping to top of page
  // Scrolls smoothly to the features section
  document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' });
});

// Optional: Add a background to header on scroll for better visibility
/*
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
*/