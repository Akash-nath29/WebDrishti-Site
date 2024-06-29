const menu = document.querySelector("#links");
document.querySelector("#hamburgerMenu").addEventListener("click", function() {
    if(menu.style.maxHeight == '0px'){
        menu.style.maxHeight = '200px';
    } else {
        menu.style.maxHeight = '0px';
    }
});