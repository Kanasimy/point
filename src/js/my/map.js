if(typeof google != 'undefined'){
//Новосиб
    var mapOptions = {
        /*Координаты центра карты*/
        center: new google.maps.LatLng(55.065829, 82.9130000),

        marker: new google.maps.LatLng(55.065829, 82.9076429),

        zoom: 17,

        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var marker = new google.maps.Marker({
        position: mapOptions.marker,
        animation: google.maps.Animation.BOUNCE,
        title: "Студия «Точка росы»",
        icon: 'images/marker.png'
    });
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    marker.setMap(map);
//Москва
    var mapOptions = {

        center: new google.maps.LatLng(55.759235, 37.6712000),

        marker: new google.maps.LatLng(55.759235, 37.6660459),

        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var marker = new google.maps.Marker({
        position: mapOptions.marker,
        animation: google.maps.Animation.BOUNCE,
        title: "Студия «Точка росы»",
        icon: 'images/marker.png'
    });
    var map = new google.maps.Map(document.getElementById("map2"),
        mapOptions);
    marker.setMap(map);
//екб
    var mapOptions = {
        /*Координаты центра карты*/
        center: new google.maps.LatLng(56.8271479, 60.599345),
        /*Координаты нашего маркера*/
        marker: new google.maps.LatLng(56.8271479, 60.594145),
        /*Увеличение карты, чем больше чило - тем больше маштаб*/
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var marker = new google.maps.Marker({
        position: mapOptions.marker,
        animation: google.maps.Animation.BOUNCE,
        title: "Студия «Точка росы»",
        icon: 'images/marker.png'
    });

    var map = new google.maps.Map(document.getElementById("map3"),
        mapOptions);
    marker.setMap(map);
}









