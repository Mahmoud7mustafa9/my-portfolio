
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


// fill skills bar
document.addEventListener('DOMContentLoaded', () => {

  const skillBars = document.querySelectorAll('.skill-fill');

  const animateSkillBar = (bar) => {
    const percent = parseInt(bar.getAttribute('data-percent'));
    const percentText = bar.querySelector('.skill-percent');

    let current = 0;
    const duration = 2000; // match CSS transition
    const intervalTime = 20; // update every 20ms
    const steps = duration / intervalTime;
    const increment = percent / steps;

    // Animate number
    const counter = setInterval(() => {
      current += increment;
      if (current >= percent) {
        current = percent;
        clearInterval(counter);
      }
      percentText.textContent = Math.round(current) + '%';
    }, intervalTime);

    // Animate bar width
    bar.style.width = percent + '%';
  };

  // Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBar(entry.target);
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.5 // trigger when 50% of the bar is visible
  });

  skillBars.forEach(bar => observer.observe(bar));

});



//scroll to the view

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
