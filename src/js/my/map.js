if(typeof google != 'undefined'){
//Новосиб
    var mapOptions = {
        /*Координаты центра карты*/
        center: new google.maps.LatLng(55.065829, 82.9130000),
        marker: new google.maps.LatLng(55.065829, 82.9076429),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
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
        styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
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
        styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#b02424"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f37121"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ca9e1a"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"lightness":"70"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.man_made","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#ffd400"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#f37121"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f37121"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#cf373a"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fcaf17"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#fcaf17"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"-8"},{"color":"#1099ce"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
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









