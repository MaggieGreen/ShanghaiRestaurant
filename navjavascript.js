
// onscroll
window.onscroll = function() {navScroll()};

function navScroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 1) {
        var element = document.getElementsByClassName('main-nav');
        element[0].classList.add("smaller");
        element[0].style.backgroundColor = "rgba(54, 71, 87, 1)";
    } else {
        var element = document.getElementsByClassName('main-nav');
        element[0].classList.remove("smaller");
        element[0].style.backgroundColor = "rgba(54, 71, 87, 1)";
    }
}
