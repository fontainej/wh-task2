(function () {
    'use strict';

    // Scroll event handler for the sticky header
    window.addEventListener('scroll', function () {
        document.getElementsByTagName('header')[0].className = (window.scrollY > 1) ? 'sticky' : '';
    });

    // Click event handler for the menu side drawer
    document.getElementById('menu-icon').addEventListener('click', function () {
        var elem = document.getElementById('sidebar');
        elem.className = (elem.className.indexOf('open')) ? 'open' : '';
    });
})();
