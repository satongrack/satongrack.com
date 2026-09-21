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
setInterval(autoSlide,5000);

// 点击圆点切换轮播
dots.forEach((dot,i)=>{
    dot.onclick = function(){
        index = i;
        showSlide(index);
    }
})

// FAQ 折叠展开交互
const qaItems = document.querySelectorAll('.qa-collapse-item');
qaItems.forEach(item => {
    const question = item.querySelector('.qa-question');
    question.addEventListener('click', () => {
        // 关闭其他所有问答
        qaItems.forEach(otherItem => {
            if(otherItem !== item){
                otherItem.classList.remove('active');
            }
        })
        // 切换当前问答状态
        item.classList.toggle('active');
    })
})
