
const handleMobileMenuToggle = () => {
    
    const ham_menu = document.getElementById("ham-menu");
    
    if(ham_menu.getAttribute("menuOpen") === "false") {
        console.log(false);
        ham_menu.setAttribute("menuOpen", true);
        ham_menu.setAttribute("style", "display: block");
    } else {
        console.log(true);
        ham_menu.setAttribute("menuOpen", false);
        ham_menu.setAttribute("style", "display: none");
    }
    
}