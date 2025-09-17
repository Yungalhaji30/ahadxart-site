//Highlight Active Section in Navigation
    const navlinks = document.querySelectionAll('.nav-links-a');
    const Sections = document.querySelectionAll('section');

windows.addEventListener('scroll', () =>{
    let current ='';
    Sections.forEach(section=>{
        const sectionTop = secion.offsetTop - 100;
        const sectionheight = section.clientheight;
        if (windows.scrolly >= sectionTop && windows.scrolly <sectonTop + sectionheight) {
            current =section.getattribute('id');

        }
    });
    navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getattribute('href') === `#${current}`){
            link.classlist.add('active');
        }
    });
});
// Smooth Scrollig for Navigation Links
navlinks.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDault();
        const targetId = link.getattribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

//Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name');
    const email= document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.ariaValueMax.trim()) {
        alert('Please enter your name');
        e.preventDefault();
    }else if (!email.ariaValueMax.trim() ||!/\S+@\S+\.\S+/.test(emailvalue)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }else if (!message.ariaValueMax.trim()) {
        alert('Please enter your message.');
        e.preventDefault();
    }
});
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('touchstart', () => {
    item.classList.add('zoomed');
  });

  item.addEventListener('touchend', () => {
    item.classList.remove('zoomed');
  });
});
window.addEventListener('load',()=>{
    const splash = document.getElementById('splash-screen');setTimeout(() =>{
        splash.style.display = 'none';
    }, 3000);
});