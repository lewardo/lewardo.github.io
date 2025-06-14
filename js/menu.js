function manageMenu() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('overlay_logo');

    const navigationLinks = document.querySelectorAll('.menu__link');
    const socialsLinks = document.querySelectorAll('.menu__socials_link');
    const signatureTag = document.querySelector('.menu__tag_container');
    const resumeLink = document.querySelector('.menu__resume_link');

    menuToggle.addEventListener('click', () => {
        setTimeout(() => {
            menu.classList.toggle('menu--visible');
        }, menu.classList.contains('menu--visible') ? 200 : 0);

        menu.classList.toggle('menu--open');

        setTimeout(() => {
            navigationLinks.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.toggle('menu__link--visible');
                }, i * 40);
            });

            socialsLinks.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.toggle('menu__socials_link--visible');
                }, i * 40);
            });
            

            signatureTag.classList.toggle('menu__tag_container--visible');
            resumeLink.classList.toggle('menu__resume_link--visible');
        }, 100);
    }); 
}