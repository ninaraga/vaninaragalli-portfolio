let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Menu icon
menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Animation text home
let typingEffect = new Typed(".multiText",{
  strings: ["Designer", "Coder", "Digital Marketer"],
  loop: true,
  typeSpeed: 100,
  BackSpeed: 80,
  BackDelay: 1000,
})

//Funtion animation skills
function efectAbility(){
  var skills = document.getElementById("skills");
  var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distance_skills >= 300){
      let ability = document.getElementsByClassName("progress");
      ability[0].classList.add("ads");
      ability[1].classList.add("htmlcss");
      ability[2].classList.add("photoshop");
      ability[3].classList.add("ads");
      ability[4].classList.add("pattern");
      ability[5].classList.add("communication");
      ability[6].classList.add("time");
      ability[7].classList.add("creativity");
      ability[8].classList.add("dedication");
      ability[9].classList.add("proyect");
  }
}

window.addEventListener('scroll', () => {
  efectAbility();
});

//Contact Form
let form = document.getElementById("my-form");
async function handleSubmit(event) {
event.preventDefault();
let status = document.getElementById("my-form-status");
let data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    swal("Thank you for writing me!", "I will answer you soon!", "success");
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      alert(data["errors"].map(error => error["message"]).join(", "));
    } else {
      swal("Seems like something went wrong!", "Write me to vaninaragalli@gmail.com", "warning");
    }
  })
}
}).catch(error => {
  swal("Seems like something went wrong!", "Write me to vaninaragalli@gmail.com", "warning");
});
}
form.addEventListener("submit", handleSubmit)
