
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function(registration) {
            console.log(
                'Service Worker registration successful with scope: ',
                registration.scope
            );
        })
        .catch(function(err) {
            console.log('Service Worker registration failed: ', err);
        });
}

window.addEventListener('load',function (e) {
    let map=jQueryProtect("#map").MeteoUniparthenopeMap("com63049","wrf5","wn1");
});

window.addEventListener('resize',function (e) {
    console.log("resize");
});
