if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function() {
            console.log('It works')
        })
        .catch(function() {
            console.log('error')
        });
    });
}