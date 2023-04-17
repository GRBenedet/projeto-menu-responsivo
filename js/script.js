function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile')
    let cabeca = document.querySelector('.cabeca')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }   else {
        menuMobile.classList.add('open')
    }
    if (cabeca.classList.contains('cabecamobile')) {
        cabeca.classList.remove('cabecamobile')
    } else {
        cabeca.classList.add('cabecamobile');
    }
}