const cursor = document.querySelector("#cursor");
const bindToQuerySelector = (querySelector) => {
    let a = document.querySelectorAll(querySelector);
    a.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
    a.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
};

cursor.style.display = "none";


let xp = 0, yp = 0;
let mouseX = 0, mouseY = 0;


$(document).on('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(window).on('scroll', function(e) {
    
});


let loop = setInterval(e => {
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $('#cursor').css({
        left: xp,
        top: yp,
    });
}, 6);


const cursorMove = () => {
    cursor.style.display = "block";
    document.removeEventListener("mousemove", cursorMove);
};
document.addEventListener("mousemove", cursorMove);


document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});


document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});


document.addEventListener("mousedown", () => {
    cursor.classList.add('click');
});


document.addEventListener("mouseup", () => {
    cursor.classList.remove('click');
});


const handleMouseEnter = () => {
    cursor.classList.add('hovered');
};


const handleMouseLeave = () => {
    cursor.classList.remove('hovered');
};
