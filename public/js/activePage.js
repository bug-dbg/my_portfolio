const li = document.querySelectorAll(".btn")
const sect = document.querySelectorAll("section")

const activeMenu = () => {
    let len = sect.length
    while(--len && window.scrollY + 97 <sect[len].offsetTop){}
    li.forEach(itx => itx.classList.remove("active"))
    li[len].classList.add("active")
}
activeMenu()
window.addEventListener('scroll',activeMenu) 