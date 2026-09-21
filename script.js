// Banner Slider Auto Play
let slides = document.querySelectorAll('.slide-item');
let dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i){
    slides.forEach(item=>item.classList.remove('active'));
    dots.forEach(dot=>dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

function autoSlide(){
    index++;
    if(index > slides.length-1) index=0;
    showSlide(index);
}
// 5秒自动轮播
setInterval(autoSlide,5000);

// 点击圆点切换
dots.forEach((dot,i)=>{
    dot.onclick = function(){
        index = i;
        showSlide(index);
    }
})
