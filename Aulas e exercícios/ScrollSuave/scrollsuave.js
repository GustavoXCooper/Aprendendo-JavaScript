function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function outroSubirTela(){
    // Por alguma razão o scroll só subia um pouco cada vez que clicava, e só consegui resolver isso com um loop
    while (document.querySelector('.texto2').scrollTop !== 0){
        document.querySelector('.outroScrollButton').scrollIntoView({
            block: 'end',
            behavior: 'auto',       
        });
    }
}

function hiddenButton(){
    if (window.scrollY === 0){
        document.querySelector('.scrollButton').style.display = 'none';
    } else {
        document.querySelector('.scrollButton').style.display = 'block';
    }
}

// Por timer
//setInterval(hiddenButton, 1000);

// Solução ideal
window.addEventListener('scroll', hiddenButton)

// Botão verde
function smallHiddenButton(){
    if (document.querySelector('.texto2').scrollTop === 0){
        document.querySelector('.outroScrollButton').style.display = 'none';
    } else {
        document.querySelector('.outroScrollButton').style.display = 'block';
    }
}

document.querySelector('.texto2').addEventListener('scroll', smallHiddenButton)

