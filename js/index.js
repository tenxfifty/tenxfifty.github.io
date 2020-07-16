(function() {
    var menuButton = document.getElementById('js-menu-button'),
        menu = document.getElementById('js-menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('menu__open');
        menuButton.classList.toggle('menu_button__open');
    })
})();