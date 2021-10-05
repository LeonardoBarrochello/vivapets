
document.addEventListener("DOMContentLoaded", ()=>{
    const target = document.querySelectorAll('[data-anime]');

    function animeScroll(){
        console.log(target)
        const windowTop = window.scrollY
        console.log(windowTop)
        target.forEach( element =>{
            if(windowTop > element.offsetTop * 0.75){
                element.classList.add("animate")
            }
        })
    }
    window.addEventListener("scroll",()=>{
        animeScroll();
    })
})