import router from './router';
window.addEventListener('hashchange', function(e) {
    router.onChangeRoute(e);
});

location.hash = 'menu';