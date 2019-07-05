let control=null;
let map=null;

let _step=1;

function getURLParameter(sParam, defaultValue) {

    let sPageURL = window.location.search.substring(1);

    let sURLVariables = sPageURL.split('&');

    for (let i = 0; i < sURLVariables.length; i++) {
        let sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    return defaultValue;
}

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
    let _place=getURLParameter("place","reg15");
    let _mapName=getURLParameter("mapName","universiade2019");
    let _ncepDate=getURLParameter("date",null);


    map=jQueryProtect("#map").MeteoUniparthenopeMap(_place,_ncepDate,{"noPopup":true,"mapName":_mapName,"baseLink":"details.html?"});

    control=$("#control").MeteoUniparthenopeControl(_place,null,null,_ncepDate);
    control.on( "update", function( event, place, product, output, ncepDate ) {
        console.log( place );
        console.log( product );
        console.log( output );
        console.log( ncepDate );

        // Relead the page with place and date
        //window.location.href="index.html?place="+place+"&date="+ncepDate;

        _place=place;
        _ncepDate=ncepDate;
    });



    });

window.addEventListener('resize',function (e) {
    console.log("resize");
});
