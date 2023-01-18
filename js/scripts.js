const slider = (options) => {
    options = options || {
        dots: true,
        initIndex: 0,
        autoPlayTime: 4000,
        autoplay: false
    };
    const slides = {
            left: document.querySelectorAll('.slider--left-block'),
            right: document.querySelectorAll('.slider--right-block')
        },
        tabs = document.querySelectorAll('.second-navigation button'),
        arrows = {
            left: document.querySelector('.arrow-left'),
            mobileLeft: document.querySelector('.slider--mobile-button.left'),
            right: document.querySelector('.arrow-right'),
            mobileRight: document.querySelector('.slider--mobile-button.right'),
        },
        dots = document.querySelectorAll('.dot button'),
        totalSlides = tabs.length - 1;
    const changeActive = (position) => {
        Array.from(tabs).map((el, index) => {
            position === index ? el.classList.add('active') : el.classList.remove('active');
        })
        if (options.dots) {
            Array.from(dots).map((el, index) => {
                position === index ? el.classList.add('activ') : el.classList.remove('activ');
            })
        }
    }
    const changeSlide = (position) => {
        options.initIndex = position;
        changeActive(position)
        for (let side in slides) {
            Array.from(slides[side]).map((el, index) => {
                position === index ? el.classList.add('active') : el.classList.remove('active');
            })
        }
    }

    const initDots = () => {
        Array.from(dots).map((el, index) => {
            el.addEventListener('click', () => {
                changeSlide(index);
            })
        })
    }

    const arrowChange = (next = false) => {
        if (next) {
            if (options.initIndex < totalSlides) {
                changeSlide(options.initIndex + 1);
            } else {
                changeSlide(0)
            }
        } else {
            if (options.initIndex > 0) {
                changeSlide(options.initIndex - 1);
            } else {
                changeSlide(totalSlides)
            }
        }
    }

    changeSlide(options.initIndex)

    const autoPlay = () => {
        setInterval(() => {
            arrowChange(true)
        }, options.autoPlayTime)
    }

    const initArrows = () => {
        arrows.left.addEventListener('click', () => {
            arrowChange()
        });
        arrows.mobileLeft.addEventListener('click', () => {
            arrowChange()
        });
        arrows.right.addEventListener('click', () => {
            arrowChange(true)
        });
        arrows.mobileRight.addEventListener('click', () => {
            arrowChange(true)
        });
    }
    const initTabs = () => {
        Array.from(tabs).map((el, index) => {
            el.addEventListener('click', () => {
                changeSlide(index);
            })
        })
    }

    initTabs();

    initArrows();

    if (options.dots) {
        initDots();
    } else {
        let dot = document.querySelector('.dot');
        if (dot) {
            dot.classList.add('hidden');
        }
    }

    if (options.autoplay) {
        autoPlay();
    }

}
let options = {
    dots: true,
    initIndex: 0,
    autoPlayTime: 4000,
    autoplay: true
};
slider(options)


