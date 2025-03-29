document.addEventListener("DOMContentLoaded", () => {

  const firstScreen = document.querySelector(".first_screen ");
  const letters = document.querySelectorAll(".logoload_letter");
  const secScreen = document.querySelector(".sec_screen ");
  const middleCircle = document.querySelector(".middle_circle");
  const warningTextContainer = document.querySelector(".warning_text_container");
  const warningText = document.querySelector(".warning_text");
  const areYouReady = document.querySelector(".ready");
  const thirdScreen = document.querySelector('.third_screen');
  const fourthScreen = document.querySelector('.fourth_screen');
  const questionButton = document.querySelector('.question');
  const modalOverlay = document.querySelector('.modal_overlay');
  const closeButton = document.querySelector('.close_button');

  

  const text = "PARALLEX".split("");
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

letters.forEach(function(letter, index) {
    let interval = setInterval(function() {
        letter.textContent = possible.charAt(Math.floor(Math.random() * possible.length));
    }, 50);
    
    setTimeout(function() {
        clearInterval(interval);
        letter.textContent = text[index];
        letter.classList.add("logo_loaded");
    }, 250 * index);
});

setTimeout(function() {
    firstScreen.style.display = "none";
    secScreenTurnOn();
}, 250 * letters.length + 2000);

function secScreenTurnOn() {
    if (window.getComputedStyle(firstScreen).display === "none") {
        secScreen.style.display = "block";
    }
}

let rotation = 0;

warningTextContainer.addEventListener("scroll", function() {
    console.log(warningText.getBoundingClientRect());
    const scrollY = warningText.getBoundingClientRect().y;
    
    rotation = scrollY * 0.09; 
    middleCircle.style.transform = "translate(0%, 0%) rotate(" + rotation + "deg)";
    smallRectangle.style.transform = "translate(0%, 0%) rotate(" + rotation + "deg)";
});

const p = document.querySelector('.warning_text p');
if (p) {
    let newHTML = '';
    const nodes = p.childNodes;
    
    nodes.forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            newHTML += node.textContent.split(/\s+/).map(function(word) {
                return word.trim() ? "<span>" + word + "</span>" : ' ';
            }).join(' ');
        } else if (node.nodeName === 'BR') {
            newHTML += '<br>';
        }
    });
    
    p.innerHTML = newHTML;
}

questionButton.addEventListener('click', function() {
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
});

function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = ''; 
}

closeButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

areYouReady.addEventListener("click", function () {
    if (secScreen.style.display !== "none") {
        secScreen.style.display = "none";
    }

    if (secScreen.style.display === "none" && firstScreen.style.display === "none") {
        thirdScreen.style.display = "block";
    }  
});

thirdScreen.addEventListener("dblclick", function () {
    if (thirdScreen.style.display !== "none") {
        thirdScreen.style.display = "none";
    } 
    if (thirdScreen.style.display == "none") {
        fourthScreen.style.display = "block";
    }
});



});



