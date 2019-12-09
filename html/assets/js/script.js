window.addEventListener("scroll", function (e) {
    navFade(this.scrollY);
});

function navFade(scroll) {
    var navbar = document.getElementsByClassName("navbar")[0];
    var navbottom = getPos(document.getElementById("hero")).bottom/3;
    var opacity = scroll > navbottom ? 1 : scroll / navbottom;
    var style = `background:rgba(255,255,255,${opacity});
                 border-bottom: 0.5px solid rgba(0,0,0,${opacity/8});`
    navbar.setAttribute('style', style);
}

function getPos(el) {
    var rect = el.getBoundingClientRect();
    var position = {
        top: rect.top + window.pageYOffset,
        bottom: rect.bottom + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        left: rect.left + window.pageXOffset,
    };
    return position;
}

function jump(classSelector) {
    el = document.getElementsByClassName(classSelector)[0];
    window.scrollTo({
        top: getPos(el).top,
        behavior: 'smooth'
    });
}