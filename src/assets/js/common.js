
// 스크롤에 따른 메뉴 UP&DOWN

let lastScrollTop = 0;
let delta = 5;
let fixBox = document.querySelector('header');
let fixBoxHeight = fixBox.offsetHeight;
let didScroll;

window.onscroll = function() {
    didScroll = true;
};

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled(){
    let nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        fixBox.classList.add('show');
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
        //Scroll up
        fixBox.classList.remove('show');
        }
    }
    lastScrollTop = nowScrollTop;
}
