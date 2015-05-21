(function () {
    'use strict';

    window.addEventListener('scroll', function () {
        document.getElementsByTagName('header')[0].className = (window.scrollY > 1) ? 'sticky' : '';
    });

    document.getElementById('menu-icon').addEventListener('click', function () {
        var elem = document.getElementById('sidebar');
        elem.className = (elem.className.indexOf('open')) ? 'open' : '';
    });
})();