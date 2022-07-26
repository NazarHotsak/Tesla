let classList = document.getElementsByClassName('slider_item');
let dotsBtnList = document.getElementsByClassName('dot-btn');
let activeSlide = 0;
let timerSlide = setInterval(nextSlide, 3000);

function nextSlide(numberOfSlide = -1)
{
    clearInterval(timerSlide);
    classList[activeSlide].style.opacity = 0;
    dotsBtnList[activeSlide].style.backgroundColor = '#000';
    
    if(numberOfSlide == -1)
    {
        activeSlide++;
        
        if(activeSlide == classList.length)
        {
            activeSlide = 0;
        }
    }
    else
    {
        activeSlide = numberOfSlide;
    }

    classList[activeSlide].style.opacity = 1;
    dotsBtnList[activeSlide].style.backgroundColor = '#fff';
    timerSlide = setInterval(nextSlide, 3000);
}

let menuLeft = document.getElementsByClassName('menu');

function openMenu(){
    for(let i = 0; i < menuLeft.length; i++)
    {
        menuLeft[i].style.left = '0%';       
    }
}

function closeMenu(){
    for(let i = 0; i < menuLeft.length; i++)
    {
        menuLeft[i].style.left = '-100%';       
    }
}