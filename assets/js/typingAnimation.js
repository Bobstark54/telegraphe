const typingAnimation = document.querySelector('.welcome-animation');
const textDivs = document.querySelector('.text');

const type = e => {
    const proceed = document.querySelector('button.proceed')
    const cross = document.querySelector('.cross')
    const dataTextTable = e.getAttribute('data-text').split('; ')
    
    let index = 0
    let iswriting = false;
    let typeSpeed = e.getAttribute('data-speed');if (!typeSpeed) {typeSpeed = 60;}
    
    const displaynone = e => e.style.display = 'none'

    const type_callback = () => {
        textDivs.innerHTML = '';
        iswriting = true;
        for (i = 0; i < dataTextTable[index].length; i++) {
            (i => {
                setTimeout(function () {
                    textDivs.innerHTML += dataTextTable[index].charAt(i);
                }, typeSpeed * i);
            })(i)
        }
        setTimeout(function () {
            iswriting = false;
        }, typeSpeed * dataTextTable[index].length);
    }
    type_callback()

    proceed.addEventListener("click", (e) => {
        console.log(e.target)
        console.log(e.target.parentElement)
        if (!iswriting) {
            index++;
            if (index != dataTextTable.length) {
                type_callback()
            }
            if (index + 1 == dataTextTable.length) {
                e.target.parentElement.style.opacity = '0'
                setTimeout(() => {
                    displaynone(e.target.parentElement)
                }, 300);
                setTimeout(() => {
                    document.location.href = "presentation.html"
                }, 2500);
            }
        }
    })

    cross.addEventListener("click", () => document.location.href = "acceuil.html")
}

if (typingAnimation) {
    type(textDivs)
}