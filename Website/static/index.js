const openmenu = document.querySelectorAll('img')[1];
const closemenu = document.querySelectorAll('img')[2];
const mainmenu = document.querySelector('#navbar ul');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', hide);


function show() {
    openmenu.style.display = "none"
    mainmenu.style.display = "inline"
    closemenu.style.display = "block"
    closemenu.style.position = "absolute"
    closemenu.style.top = "10%"
    closemenu.style.right = "5%"
    closemenu.style.zindex = "12"
    mainmenu.style.position = "absolute"
    mainmenu.style.top = "0"
    mainmenu.style.height = "250px"
    mainmenu.style.width = "100%"
    mainmenu.style.right = "0%"
    mainmenu.style.left = "0%"
    mainmenu.style.zindex = "11"
    mainmenu.style.background = "red"
}

function hide() {
    openmenu.style.display = "inline"
    closemenu.style.display = "none"
    mainmenu.style.display = "none"
}