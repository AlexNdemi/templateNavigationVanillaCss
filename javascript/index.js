const navToggle=document.querySelector('.nav-toggle');
const  navLinks=document.querySelectorAll('.nav-link');
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
    const visibility=navToggle.getAttribute("aria-expanded");

    if(visibility==="false"){
        navToggle.setAttribute("aria-expanded",true);
    }else if(visibility==="true"){
        navToggle.setAttribute("aria-expanded",false);
    }
});
navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        document.body.classList.remove('nav-open');
    })
})