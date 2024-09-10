const startTime = performance.now();
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const airBus = () => {
  let airbus = gsap.to(".air", {
            duration: 30,
            repeatDelay: 0,
            repeat: -1,
            ease: "power0",
            motionPath: {
                path: "#path",
                align: "#path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 1,
                end: 0
            }
        });

  let prevWidth = 0

    window.addEventListener('resize', () => {
      let nowWidth = window.innerWidth

      if (nowWidth != prevWidth) {
        prevWidth = nowWidth
        airbus = gsap.to(".air", {
            duration: 30,
            repeatDelay: 0,
            repeat: -1,
            ease: "power0",
            motionPath: {
                path: "#path",
                align: "#path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 1,
                end: 0
            }
        })
      }
      
    }
    )
}

let max = () => {
  let buttonWork = document.querySelectorAll('.six-buttons button');
        let itemWork = document.querySelectorAll('.six-grid__item');

        let viewItem = (value) => {
            if (value === 'all') {
                itemWork.forEach(item => {
                    item.classList.add('active');
                });
            } else {
                itemWork.forEach(item => {
                    if (item.getAttribute('data-value') === value) {
                        item.classList.add('active')
                    }
                });
            }
        }

        buttonWork.forEach(button => {
            button.addEventListener('click', () => {
                buttonWork.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const value = button.getAttribute('data-value');

                itemWork.forEach(item => {
                    item.classList.remove('active')
                });

                viewItem(value)
            });
        });

        itemWork.forEach(item => {
            item.classList.add('active');
        });

        let buttons = document.querySelectorAll('.btn');
        let popupWrapper = document.querySelector('.popup-wrapper');
        let closePopup = document.querySelector('#close');
        let body = document.querySelector('body');
        const popupBTN = popupWrapper.querySelector('button')

        const visiblePopupForm = () => {
            if (popupWrapper.classList.contains('active')) {
                popupWrapper.style.display = 'none'
                popupWrapper.classList.remove('active');
                body.classList.remove('active')
            } else {
                popupWrapper.style.display = 'flex'
                popupWrapper.classList.add('active');
                if (window.innerWidth < 768) body.classList.add('active')  
            }
        }

        buttons.forEach(button => {
            if (!button.classList.contains('video__btn'))
                button.addEventListener('click', visiblePopupForm)
        });

        closePopup.addEventListener('click', visiblePopupForm)

        popupBTN.addEventListener('click', visiblePopupForm)

        let buttonMenu = document.querySelector('.head__burger');
        let menuWrapper = document.querySelector('.menu-wrapper');
        let closeMenu = document.querySelector('#close-menu');
        let linkMenu = document.querySelector('.menu-wrapper .foo__one a');

        const toggleMenu = () => {
            if (menuWrapper.classList.contains('active')) {
                menuWrapper.classList.remove('active');
                setTimeout(() => menuWrapper.style.display = 'none', 6e2)
            } else {
                menuWrapper.style.display = 'flex'
                setTimeout(() => menuWrapper.classList.add('active'), 0)
            }
        }

        buttonMenu.addEventListener('click', toggleMenu)

        closeMenu.addEventListener('click', toggleMenu)
        linkMenu.addEventListener('click', e => toggleMenu)

        let itemContainers = document.querySelectorAll('.eight-grid__item-container');

        itemContainers.forEach(container => {
            let item = container.querySelector('.eight-grid__item');
            let itemInfo = container.querySelector('.eight-grid__item-info');
            let svgRotate = container.querySelector('.eight-grid__item svg path');

            item.addEventListener('click', () => {
                itemInfo.classList.toggle('active');
                svgRotate.classList.toggle('active')
            });
        });

        // Направления

        let cardButtons = document.querySelectorAll('.four__card'),
            fourInfo = document.querySelector('.four__info'),
            cardInfo = fourInfo.querySelectorAll('.four__card-info'),
            exit = document.querySelectorAll('.four__exit'),
            activeCard;

        const activeMob = (index) => {
            cardInfo.forEach(i => i.classList.remove('active'))

            let actualCard = cardButtons[index],
                infoWrap = actualCard.querySelector('.four__info--mob'),
                infoText = actualCard.querySelector('.four__desctiption--mob'),
                btn = actualCard.querySelector('.full-info');

            actualCard.classList.add('active')

            setTimeout(() => {
              infoText.style.opacity = 1;
              infoText.style.transform = 'translate(0px, 0px)';
            }, 0)



            activeCard = index
            actualCard.scrollIntoView()
        }

        const disableMob = (index) => {
            let actualCard = cardButtons[index],
                infoWrap = actualCard.querySelector('.four__info--mob'),
                infoText = actualCard.querySelector('.four__desctiption--mob'),
                btn = actualCard.querySelector('.full-info');

            actualCard.classList.remove('active')

            setTimeout(() => {
              infoText.style.opacity = 0;
              infoText.style.transform = 'translate(-50px, 0px)';
            }, 0)



            activeCard = undefined;
        }


        const active = (index) => {
            let main = document.querySelectorAll(`.four__card-${index}`);

            activeCard = index

            main[1].style.display = 'block'
            main[0].classList.add('active')
            setTimeout(() => main[1].classList.add('active'), 0)
        }

        const disable = (index) => {
            let main = document.querySelectorAll(`.four__card-${index}`);

            main[1].style.display = 'none'
            main[1].classList.remove('active')
            main[0].classList.remove('active')

            activeCard = undefined;
        }

        cardButtons.forEach((i, index) => {
            i.addEventListener('click', () => {
                if (activeCard >= 0) {
                    if (window.innerWidth > 768) {
                        index == activeCard ? disable(index) : (disable(activeCard), active(index))
                    } else index == activeCard ? disableMob(index) : (disableMob(activeCard), activeMob(index))
                } else {
                    if (window.innerWidth > 768) active(index)
                    else activeMob(index)
                }
            })


        })

        exit.forEach(i => i.addEventListener('click', e => {
            // добавить мобилку
            if (window.innerWidth > 768) disable(activeCard)
        }))

        window.addEventListener('resize', () => {
            let index = activeCard;

            if (window.innerWidth < 768 && activeCard >= 0) {
                disable(index)
                activeMob(index)
            } else if (activeCard >= 0) {
                disableMob(index)
                active(index)
            }
        })
}

let sixGo = () => {
    const main = document.querySelector('.six'),
        btns = main.querySelectorAll('.six__btn'),
        blocks = main.querySelectorAll('.six__block');

    let activeBtn = value => btns.forEach(i => i.getAttribute('data') == value ?
        i.classList.add('six__btn--active') : i.classList.remove('six__btn--active'))

    let view = list => {
        list.forEach(i => {
            i.classList.remove('six__block--visible')
            i.classList.add('six__block--hidden')
            i.style.display = 'flex'
        })

        setTimeout(() => {
            list.forEach(i => {
                i.classList.remove('six__block--hidden')
                i.classList.add('six__block--visible')
            })
        }, 0)
    }

    let sorting = value => {
        let newList = []

        blocks.forEach(i => {
            i.style.display = 'none'
            if (i.getAttribute('data') == value || value == 0) newList.push(i)
        })

        view(newList)
        activeBtn(value)
    }

    btns.forEach(i => i.addEventListener('click', () => {
        sorting(i.getAttribute('data'))
    }))
}

//  NUMBER
let animationElem = () => {
    let data = [{
        elem: '.animation1__num--1',
        num: 9
    }, {
        elem: '.animation1__num--2',
        num: 14
    }, {
        elem: '.animation1__num--3',
        num: 1600
    }, {
        elem: '.animation1__num--4',
        num: 2000000
    }, ]

    let animation = (countElement, startValue, endValue, animationDuration) => {
        const startTime = performance.now();
        const endTime = startTime + animationDuration;

        function updateValue(currentTime) {
            if (currentTime < endTime) {
                const progress = (currentTime - startTime) / animationDuration;
                const animatedValue = Math.floor(startValue + progress * (endValue - startValue));

                // Форматируем числа
                const formattedValue = animatedValue.toLocaleString();

                countElement.innerHTML = formattedValue;
                requestAnimationFrame(updateValue);
            } else {
                // Форматируем конечное значение
                const formattedEndValue = endValue.toLocaleString();
                countElement.innerHTML = formattedEndValue;
                if (endValue == 2000000) document.querySelector('.promo__num--description--4').style.opacity = 1
            }
        }

        requestAnimationFrame(updateValue);
    }

    data.forEach(i => {
        const elem = document.querySelector(i.elem);
        animation(elem, 1, i.num, 3000)

    })

}

const targetElement = document.querySelector('.promo__num--number')

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function handleScroll() {
    if (isElementInViewport(targetElement)) {
        animationElem();
        window.removeEventListener("scroll", handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
// ---------

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function calculatePercentageFromTopOfViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const distanceFromTop = rect.top;

    const percentageFromTop = 100 - (distanceFromTop / windowHeight) * 100;

    // Ограничиваем значения от 0 до 100
    return Math.min(100, Math.max(0, percentageFromTop));
}

function updateProgressBar() {
    const content = document.querySelector('.three__line--1');
    if (isElementInViewport(content)) {
        const countNum = calculatePercentageFromTopOfViewport(content).toFixed(2);
        //
    }
}

let goLine = () => {
    let data = ['.three__line--1', '.three__line--2', '.three__line--3']

    let go = (elem, bool) => {
        const content = document.querySelector(elem)
        if (isElementInViewport(content)) {
            const countNum = calculatePercentageFromTopOfViewport(content).toFixed(2);
            content.style.transform = bool ? `translateX(${countNum / 2}%)` : `translateX(-${countNum / 2}%)`
        }
    }
    let all = () => {
        let data = ['.three__line--1', '.three__line--2', '.three__line--3']
        data.forEach((i, index) => index == 1 ? go(i, false) : go(i, true))
    }
    window.addEventListener('scroll', all);
    window.addEventListener('resize', all);
    window.addEventListener('load', all);
}

function isElementInViewport1(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Вычисляем середину экрана
    const screenMiddle = windowHeight / 2;

    // Проверяем, что верхняя часть блока находится ниже середины экрана
    // и нижняя часть блока выше середины экрана
    return rect.top <= screenMiddle && rect.bottom >= screenMiddle;
}

function calculatePercentageFromMiddleOfViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const middleOfViewport = windowHeight / 2; // Середина высоты экрана
    const distanceFromMiddle = rect.top - middleOfViewport;
    const halfElementHeight = rect.height / 2;

    const percentageFromMiddle = (distanceFromMiddle / halfElementHeight) * 50 + 50;


    return percentageFromMiddle;
}

const startValue = 50;
const endValue = -50;

function calculateValueFromPercentage(start, end, percentage) {
    // Преобразуем процент в диапазоне [0, 100] в диапазон [start, end]
    const calculatedValue = end - (percentage / 100) * (end - start);

    return calculatedValue * -1;
}

const calculatePercentageInRange = (value, min, max) => {
    let x = ((value - min) / (max - min)) * 100

    if (x < 2) {
        return 0
    } else if (x > 97) {
        return 100
    }

    return x
}

let goStep = () => {
    let line = document.querySelector('.five__line--hidden'),
        block = document.querySelector(".five__main");

    let go = () => {
        if (isElementInViewport1(block)) {
            const countNum = calculatePercentageFromMiddleOfViewport(block).toFixed(2);
            const myNum = calculateValueFromPercentage(startValue, endValue, countNum);
            myNum < 10 ? localStorage['step'] = 0 : localStorage['step'] = 1
            line.style.transform = `translateY(${myNum}%)`
        } else {
            localStorage['step'] == 1 ? line.style.transform = `translateY(100%)` : line.style.transform = `translateY(0%)`
        }
    }

    window.addEventListener('scroll', go);
}

let goVideo1 = (player1, player2) => {
    const main = document.querySelector('.video__popup'),
        exit = main.querySelector('.video__exit'),
        btn = document.querySelector('.video__btn'),
        iframe = document.querySelector('#test'),
        video = document.querySelector('#test').contentWindow,
        body = document.querySelector('body');

    player1.on('bufferend', () => {
        player2.pause()
        player1.play()
    });

    const visibleWrap = () => {
        if (!main.classList.contains('active')) {
            main.style.display = 'block'

            player2.pause()
            player1.play()


            if (window.innerWidth < 768) {
                body.style.height = "100%"
                body.style.overflow = "hidden"
            }

            setTimeout(() => {
                main.classList.add('active')
            }, 0)
            
        } else {
            player1.pause()
            player2.play()



            main.classList.remove('active')
            body.style.height = "revert"
            body.style.overflow = "revert"

            setTimeout(() => {
                main.style.display = 'none'
                main.classList.remove('active')
            }, 600)
        }
    }

    btn.addEventListener('click', visibleWrap)
    exit.addEventListener('click', visibleWrap)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let goMap = () => {
    const map = document.querySelectorAll('.single__block'),
        main = document.querySelector('.animation');

    const num1 = getRandomInt(0, map.length);
    const num2 = getRandomInt(0, map.length);
    const num3 = getRandomInt(0, map.length);
    let count = false

    let goVisible = (list, num) => {
        count = true

        if (num < list.length) {
            list[num].classList.add('active')
            setTimeout(() => {
                list[num++].classList.remove('active')

                goVisible(list, num)
            }, 3000)

        } else {
            count = false
            return
        }
    }


    let goGo = () => {
        const maxNum = map.length - 1;
        const result = [map[getRandomInt(0, maxNum)],
            map[getRandomInt(0, maxNum)],
            map[getRandomInt(0, maxNum)]
        ];

        if (map) goVisible(result, 0)
    }

    goGo()
}

const videoInit = () => {
    let iframe1 = document.querySelector('#test'),
        iframe2 = document.querySelector('#test2');

    let player1 = new Vimeo.Player(iframe1),
        player2 = new Vimeo.Player(iframe2);

    // player2.play()
    // player2.pause()

    goVideo1(player1, player2)
}

const ready = () => {
  airBus()
  goMap()

  max()

  videoInit()

  goStep()

  sixGo()
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Код выполнился за ${elapsedTime} миллисекунд`);
}

document.addEventListener('DOMContentLoaded', ready)


const translateR = () => {
    const main = document.querySelector('.lang');
    const mainMob = document.querySelector('.lang-mob');
    const actualMob = mainMob.querySelector('.lang__actual')
    const liMob = mainMob.querySelectorAll('.lang__li')

    const mobMenuClick = () => mainMob.classList.toggle('active') 

    actualMob.addEventListener('click', mobMenuClick)

    const editLangMobile = lang => {
        const actualImg = actualMob.querySelector('.lang-flag');
        const oldImg = actualImg.innerHTML;

        const actualText = actualMob.querySelector('.lang__text');
        const oldText = actualText.textContent;


        const newLang = mainMob.querySelectorAll('.lang__list-mob .lang__li');

        newLang.forEach(i => {
            if (i.querySelector('img').getAttribute('user-lang') == lang) {
                const text = i.querySelector('.lang__text');
                const img = i.querySelector('.lang-flag');

                actualImg.innerHTML = img.innerHTML
                img.innerHTML = oldImg

                actualText.textContent = text.textContent
                text.textContent = oldText
            }
        })
    }

    liMob.forEach(elem => elem.addEventListener('click', e => {
        editLang(elem)
        mobMenuClick()
    }))

    const menu = main.querySelector('.lang__list');
    const actual = main.querySelector('.lang__actual');

    const visibleMenu = () => {
        if (!main.classList.contains('active')) {
            menu.style.display = 'flex'
            setTimeout(() => main.classList.add('active'), 0)
        } else {
            main.classList.remove('active')
            setTimeout(() => menu.style.display = 'none', 400)
        }
    }

    actual.addEventListener('click', visibleMenu)

    const li = main.querySelectorAll('.lang__li');
    const lang = main.querySelector('#lang');

    const actualFlag = actual.querySelector('.lang-flag');

    const translate = (lang) => fetch('api/translate.json')
        .then(i => i.json())
        .then(res => {
            let main = document.querySelectorAll('[translate]');

            main.forEach(i => {
                let name = i.getAttribute('translate');
                let result = res[lang] ? res[lang][name] : res['en'][name];

                if (result) {
                    if (name == 'email' || name == 'name') i.placeholder = result
                    else i.innerHTML = result
                } else i.textContent = ''
            })
        })


    const editLangDesktop = newLang => {
        li.forEach(i => {
            if (i.querySelector('img').getAttribute('user-lang') == newLang) {
                const newFlagContainer = i.querySelector('.lang-flag');
                actualFlag.innerHTML = newFlagContainer.innerHTML
            }
        })
    }

    editLangDesktop('ru')

    li.forEach(i => i.addEventListener('click', e => {
        editLang(i)

        visibleMenu()
    }))

    const editLang = elem => {
        const langResult = elem.querySelector('.lang-flag img').getAttribute('user-lang');
        localStorage.lang = langResult
        lang.value = localStorage.lang

        editLangDesktop(langResult)
        editLangMobile(langResult)
        translate(langResult)
        changeLanguage(langResult)

    }

    const goStart = () => {
        const urlLanguageCode = getLanguageFromURL();


        const localStorageLanguageCode = localStorage.lang || '';

        const languageCode = urlLanguageCode ? urlLanguageCode : 
        localStorageLanguageCode ? localStorageLanguageCode : 'ru'

        console.log(urlLanguageCode)
        console.log(languageCode)

        localStorage.lang = languageCode;

        editLangDesktop(languageCode);
        editLangMobile(languageCode);
        translate(languageCode);
        changeLanguage(languageCode);
    }

    function changeLanguage(newLanguage) {
        window.history.pushState({}, '', '/' + newLanguage)
    }

    function getLanguageFromURL() {
        url = window.location.pathname
        // Регулярное выражение для извлечения первого сегмента после слеша
        const regex = /\/([^/]+)/;
        
        // Ищем совпадение с регулярным выражением в URL
        const match = url.match(regex);

        // Если найдено совпадение и есть совпавший сегмент, вернем его
        if (match && match[1]) {
            return match[1];
        }

        return null;
    }
    

    goStart()
}

translateR()