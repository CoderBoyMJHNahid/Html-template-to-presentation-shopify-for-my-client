
// code for sticky header

const header = document.querySelector('header');
const header_text = document.querySelector('.title');
const aside_menu = document.querySelector('.side_menu_wrapper');


window.addEventListener("scroll",()=>{
    
    if(window.scrollY > 250){
        header.classList.add("sticky");
        header_text.classList.add("d-none");
        aside_menu.classList.add("fixed");
    }else{
        header.classList.remove("sticky");
        header_text.classList.remove("d-none");
        aside_menu.classList.remove("fixed");
    }
})


// code for highlight menu items on scroll
const all_content_wrapper = document.querySelectorAll(".content_wrapper[id]");

window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;
  
    all_content_wrapper.forEach(current => {
    
        const contentHeight = current.offsetHeight;
    const contentTop = current.offsetTop - 400;

    contentId = current.getAttribute("id");
    
        if (scrollY > contentTop && scrollY <= contentTop + contentHeight){
        document.querySelector("a.side_menu_link[href*=" + contentId + "]").classList.add("active");
        } else {
        document.querySelector("a.side_menu_link[href*=" + contentId + "]").classList.remove("active");
        }
    });
});


// code for go to content section

const all_content_link = document.querySelectorAll(".side_menu_link");

all_content_link.forEach(current => {
    current.addEventListener("click", (e)=>{
        e.preventDefault();
        const contentId = current.getAttribute("href").slice(1);
        const target = document.querySelector(`#${contentId}`);
        
        window.scrollTo({
            top: target.offsetTop - 350,
            behavior: "smooth"
        });
    });
});
