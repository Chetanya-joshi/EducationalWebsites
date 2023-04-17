//change navbar style on scroll

let nav = document.querySelector('nav');

window.addEventListener('scroll' , function(){
    nav.classList.toggle('window-scroll' , window.scrollY > 0);
})

//show Hide faq answer

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click' , function(){
        faq.classList.toggle('open');

        // change icon

        const icon = faq.querySelector('.faq_icon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }
        else{
            icon.className = 'uil uil-plus'
        }
        
    })
})

// show/hide nav menu

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click' , ()=>{
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})



const closeNav = ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}
closeBtn.addEventListener('click' , closeNav);