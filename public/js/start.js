
    function sayHello() {
      const name = document.getElementById('username').value;
      const messageDiv = document.getElementById('message');
      const enterBox = document.getElementsByClassName("enter")[0];
      if (name.trim() === '') {
        messageDiv.textContent = 'Please enter your name.';

      } else {
        messageDiv.textContent = `Hello, ${name}! 👋 I created this project with Node.js, CSS, and JavaScript 👨‍💻. I hope you’ll enjoy exploring it! 🚀`;
        enterBox.style.display = "none";      
    }
    }

    
document.querySelectorAll('.skill-fill').forEach(bar => {
  const percent = parseInt(bar.getAttribute('data-percent'));
  const percentText = bar.querySelector('.skill-percent');

  let current = 0;
  const duration = 2000; // total animation time in ms
  const increment = percent / (duration / 20); // update every 20ms

  setTimeout(() => {
    bar.style.width = percent + '%'; // start the bar fill animation

    const counter = setInterval(() => {
      if (current < percent) {
        current += increment;
        percentText.textContent = Math.round(current) + '%';
      } else {
        percentText.textContent = percent + '%';
        clearInterval(counter);
      }
    }, 20);
  }, 300);
});

//scrol to the view

document.querySelector(".about").addEventListener("click",()=>{
  document.querySelector(".aboutme").scrollIntoView({
    behavior:"smooth"
  });
})

document.querySelector(".contactme").addEventListener("click",()=>{
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
})

 const scrollWrapper = document.getElementById('projectsWrapper');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', () => {
  scrollWrapper.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

scrollRight.addEventListener('click', () => {
  scrollWrapper.scrollBy({
    left: 300,
    behavior: 'smooth'
  });

});

// the projects show

// open modal

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click",()=>{
      const targetid = button.dataset.target;
      document.getElementById(targetid).style.display="flex";
    })
  })
// close modal
 document.querySelectorAll(".close-modal").forEach(closeBtn => {
    closeBtn.addEventListener("click",()=>{
      closeBtn.closest(".modal-overlay").style.display="none";
    })
  })

window.addEventListener('click', (e) => {
  if (e.target.classlist.contains("modal-overlay")) {
    modal.style.display = 'none';
  }
});
