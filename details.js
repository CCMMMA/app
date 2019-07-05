let control=null;
let chart=null;
let plot=null;
let box=null;

let _step=1;
let _hours=0;

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

window.addEventListener('load',function (e) {
    let _place=getURLParameter("place","com63049");
    let _product=getURLParameter("product","wrf5");
    let _ncepDate=getURLParameter("date",null);
    let _output=getURLParameter("output","gen");



    box=jQueryProtect("#box").MeteoUniparthenopeDayBox(_place,_product,"#titolo1");
    chart=jQueryProtect("#chart").MeteoUniparthenopeChart(_place,_product,_output,_hours,_step,"#titolo2","#box");
    plot=jQueryProtect("#plot").MeteoUniparthenopePlot(_place,_product,_output,_ncepDate,
        "topBarImage",
        null,
        null,
        "bottomBarImage");
    control=$("#control").MeteoUniparthenopeControl(_place,_product,_output,_ncepDate);
    control.on( "update", function( event, place, product, output, ncepDate ) {
        console.log( place );
        console.log( product );
        console.log( output );
        console.log( ncepDate );

        plot.update(place,product,output,ncepDate);
        if (place !== _place) {
            box=$("#box").MeteoUniparthenopeDayBox(place,product,"#titolo1");
            chart=$("#chart").MeteoUniparthenopeChart(place,product,output,_hours,_step,"#titolo2","#box");
        }
        else if (product!==_product || output !== _output) {
            chart=$("#chart").MeteoUniparthenopeChart(place,product,output,_hours,_step,"#titolo2","#box");
        }

        _product=product;
        _place=place;
        _output=output;
        _ncepDate=ncepDate;
    });
});
