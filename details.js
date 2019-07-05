function getURLParameter(sParam, defaultValue) {

    var sPageURL = window.location.search.substring(1);

    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    return defaultValue;
}

window.addEventListener('load',function (e) {
    var _place=getURLParameter("place","com63049");
    let box=jQueryProtect("#box").MeteoUniparthenopeDayBox(_place);
});
