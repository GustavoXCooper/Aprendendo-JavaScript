function menuToggle(e){
    let menuArea = document.querySelector('#menuArea')
    if (menuArea.classList.contains('openedMenu') == true) {
        menuArea.classList.remove('openedMenu')
    } else {
        menuArea.classList.add('openedMenu')
    }
}
