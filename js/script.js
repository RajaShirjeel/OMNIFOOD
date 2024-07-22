const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// mobile navigation

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNav.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open');
});


// smooth scroll 
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        

        // scroll back to top
        if(href === '#') {
            window.scrollTo({
                top: 0, 
                behavior: "smooth",
            });
        }

        // scroll to other links
        if (href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth" });
        }

        // close mobile navigation
        if (link.classList.contains('main-nav-link')){
            headerEl.classList.toggle('nav-open');
        }

    })
})


// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if (ent.isIntersecting === false){
        document.body.classList.add('sticky');
        
    }
    else{
        document.body.classList.remove('sticky');
        

    }

}, 
{
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});
obs.observe(sectionHeroEl);

