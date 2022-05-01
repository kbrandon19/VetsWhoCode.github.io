// toggle for mobile menu

const ham = document.getElementById('ham');
const mobileNav = document.getElementById('mobile-nav');
const exit = document.getElementById('exit');


// intersection observer - changes the background color of the nav afer scrolling past a certain point
const nav = document.querySelector('nav');
const sectionOne = document.querySelector('.hero__content');

const sectionOneOptions = {
 };

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){

    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
        } else{
            nav.classList.remove('nav-scrolled');
        }
    })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);
