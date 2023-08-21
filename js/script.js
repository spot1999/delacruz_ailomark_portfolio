

// try to hide images
document.addEventListener("DOMContentLoaded", function() {
  let img1 = "https://i.ibb.co/FKpS6V7/time2.png";
  const time2 = img1; // Your image URL
  const dynamicImage = document.getElementById("dynamic-image");
  dynamicImage.src = time2;
});

//try to hide images

/* Style to hide the default audio controls and icon */

// try experiment auido
var audioSource = "../js/we_could_happen.mp3";
//we_could_happen.mp3
// "https://d189.d2mefast.net/tb/2/24/we_could_happen_ukulele_cover_mp3_39876.mp3?play";
let hasStarted = false;

// Create an audio element
var audio = document.createElement('audio');

// Create a source element and set its attributes
var source = document.createElement('source');
source.src = audioSource;
source.type = "audio/mpeg";

// Append the source element to the audio element
audio.appendChild(source);
// try experiment audio

// Detect touch screen devices
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// Play audio on touch
if (isTouchDevice()) {
  document.addEventListener('touchstart', () => {
    audio.play();
    audio.volume = 0.1; // Set volume to 50%
  });
}


// Play audio on touch or scroll
function playAudio() {
  if (!hasStarted) {
    audio.play();
    audio.volume = 0.1; // Set volume to 50%
    hasStarted = true;
  }
}





// Play audio on cursor movement
document.addEventListener('mousemove', () => {
  if (!hasStarted) {
    audio.play();
    audio.volume = 0.1; // Set volume to 50%
    hasStarted = true;
  }
});
// Check if 1 + 1 equals 2
if (1 + 1 === 2) {
  audio.volume = 0.1; // Set volume to 50%
  audio.play();
  hasStarted = true;
}

// Play audio on mouse scroll
window.addEventListener('wheel', () => {
  if (!hasStarted) {
    audio.play();
    audio.volume = 0.1; // Set volume to 50%
    hasStarted = true;
  }
});



menuIcon = document.querySelector('#menu-icon');
navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// scroll section
sections = document.querySelectorAll('section');
navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
      //   active animation for animation on sroll
      sec.classList.add('show-animate');
      // show-animate
    }
    // if want to use animation that repeat on srolls
    else {
      sec.classList.remove('show-animate');
    }
  });

  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  //   remove toogle icon and navbar when click

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  footer = document.querySelector('footer');
  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// message sending gmail
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_i9asr2b';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });



//icons and greetings
function getGreeting() {
  const now = new Date();
  const utcOffset = now.getTimezoneOffset() / 60; // Get the UTC offset in hours
  const philippineTime = new Date(now.getTime() + (utcOffset + 8) * 60 * 60 * 1000);

  const currentHour = philippineTime.getHours();
  let greeting;
  let icon;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Magandang umaga';
    icon = '☀️';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Magandang hapon';
    icon = '⛅';
  } else {
    greeting = 'Magandang gabi';
    icon = '🌙';
  }

  const visitorGreeting = `${greeting}  <span class="icon">${icon}</span> <br> Visitor 😊 `;

  document.getElementById('greeting').innerHTML = visitorGreeting;
}

// //nonsense code

//    <script src="https://smtpjs.com/v3/smtp.js">
//   </script> 

//    <script>
//     var btn = document.getElementById("btn");
//     btn.addEventListner("click", function (e) {
//       e.preventDefault()
//       // console.log("hi");
//       var name = document.getElementById("name").value;
//       var phone = document.getElementById("phone").value;
//       var text = document.getElementById("text").value;
//       var email = document.getElementById("email").value;
//       var subject = document.getElementById("subject").value;

//       Email.send({
//         SecureToken: "19f81112-ecc6-438d-8048-150474882a97",
//         To: 'spoted1999@gmail.com',
//         From: "you@isp.com",
//         Subject: "This is the subject",
//         Body: "And this is the body"
//       }).then(
//         message => alert(message)
//       );

//     })

//   </script> 




