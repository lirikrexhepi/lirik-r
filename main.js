//Blob Animation
const blob = document.getElementById("blob")

  document.body.onmousemove  = event => {
    const{clientX , clientY} = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`

        
    }, {duration: 3000, fill:"forwards"})

    console.log(left);
    console.log(top);

  }


//Main Text Contact Me Animation

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const enhance = id =>{
    const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");
    inner.className = "inner";    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    outer.appendChild(inner);    
    element.appendChild(outer);
  })
}


enhance("contactMe");

// Get the #mainText element
const mainText = document.getElementById('mainText');
const linkedIn = document.getElementById('linkedIn');
const github = document.getElementById('github');

// Listen for the scroll event
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the opacity and scale values based on the scroll position
  let opacity = Math.max(1 - scrollPosition / 500, 0.6);
  let scale = Math.max(1 - scrollPosition / 1000, 0.8);

  // Apply the opacity and scale values to the #mainText element
  mainText.style.opacity = opacity;
  mainText.style.transform = `scale(${scale})`;

  // Apply the opacity value to the linkedIn and github elements
  linkedIn.style.opacity = opacity;
  github.style.opacity = opacity;
});



//Secon Part of website (image on mouse move)
const images = document.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";

  last = { x, y };
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
  if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if(tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

const handleOnTouch = e => {
  const touch = e.touches[0];
  
  if(distanceFromLast(touch.clientX, touch.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, touch.clientX, touch.clientY);

    if(tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

if (window.matchMedia("(pointer: coarse)").matches) {
  window.ontouchmove = e => handleOnTouch(e);
} else {
  window.onmousemove = e => handleOnMove(e);
}


//Into Experiences Transitions
const box = document.querySelector('#box');


window.addEventListener('scroll', function() {
  const boxPosition = box.getBoundingClientRect();
  const isVisible = boxPosition.bottom > 0 && boxPosition.top < window.innerHeight;

  if (isVisible) {
    mainText.style.opacity = '0';
  } else {
    mainText.style.opacity = '1';
  }
});
