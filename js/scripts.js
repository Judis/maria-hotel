'use strict';

$(function() {
    flatpickr('.js-datepickr', {
        disableMobile: true,
        "locale": {
            "firstDayOfWeek": 1
        },
        onOpen: function(instance) {
            $(this.element).parent().addClass('is-open');
        },
        onClose: function(item) {
            $(this.element).parent().removeClass('is-open');
        }
    });

    flatpickr('.js-datepickr-inline', {
        disableMobile: true,
        multiple: true,
        inline: true,
        "locale": {
            "firstDayOfWeek": 1
        },
        defaultDate: '2018-10'
    });

    $('.js-datepickr-inline').each(function(i) {
        const currentDate = new Date();
        const currentMounth = currentDate.getMonth() + i + 1;
        const currentYear = currentDate.getFullYear();

        flatpickr(this, {
            disableMobile: true,
            inline: true,
            "locale": {
                "firstDayOfWeek": 1
            },
            minDate: currentYear + '-' + currentMounth
        });
    });

    $(document).on('click', '.js-burger', function() {
        $(this).toggleClass('is-open');
    });

    $(document).on('click', '.js-options-btn', function() {
        const $wrapper = $(this).closest('.js-options');

        $('.js-options').not($wrapper).removeClass('is-open');
        $wrapper.toggleClass('is-open');
    });

    $(document).on('change', '.js-options-radio', function() {
        const $wrapper = $(this).closest('.js-options');
        const name = $(this).data('name');

        $wrapper.find('.js-options-btn').text(name);
    });

    $(document).on('click', '.js-dropdown-btn', function(e) {
        const $parent = $(e.target).parent();

        if ($parent.hasClass('is-open')) {
            $parent.removeClass('is-open');

            return;
        }

        $('.js-dropdown-btn').parent().removeClass('is-open')
        $parent.addClass('is-open');
    });

    $(document).on('click', function(e) {
        if ($(e.target).closest('.js-options').length) return;

        $('.js-options').removeClass('is-open');
    });

    $('.js-carousel').owlCarousel({
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0
            },
            768: {
                items: 2,
                nav: true,
                margin: 15
            },
            1400: {
                items: 3,
                nav: true,
                margin: 27
            }
        }
    });

    $('.js-carousel-availability').owlCarousel({
        loop: false,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: true,
            },
            1400: {
                items: 3,
                nav: true,
            }
        }
    });

    $('.js-carousel-wide-md').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
                nav: true
            },
            1400: {
                items: 3
            }
        }
    });

    $('.js-carousel-wide').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        nav: true,
        margin: 0
    });

    $(window).resize(function() {
        if ($(window).width() > 1023) {
            const $carouselList = $('.js-mobile-carousel');

            for (let i = 0; i < $carouselList.length; i++) {
                const item = $carouselList[i];

                if (!$(item).data('owl.carousel')) continue;

                $(item).data('owl.carousel').destroy();
            }

            return;
        }

        $('.js-mobile-carousel').owlCarousel({
            loop: true,
            dots: true,
            items: 1,
            nav: false,
            margin: 0
        });
    });

    initScrollbar();

    $(document).on('click', '.js-show-next-block', function() {
        const $blockList = $(this).siblings('.js-block-list').find('.js-block');
        let targetIndex = 0;

        $blockList.each(function(i) {
            i += 1;

            if (!$(this).hasClass('is-open')) return;

            $(this).removeClass('is-open');

            targetIndex = i >= $blockList.length ? targetIndex : i;
        });

        $($blockList[targetIndex]).addClass('is-open');
    });

    if ($(window).width() > 1023) return;

    $('.js-mobile-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        nav: false,
        margin: 0
    });
});

function initScrollbar() {
    if (!$('.js-scroll').length) return;

    const ps = new PerfectScrollbar('.js-scroll', {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20
    });

    ps.update();
}

function initMap() {
    const mapWrap = document.getElementById('map');

    if (mapWrap) {
        const map = new google.maps.Map(mapWrap, {
            center: {
                lat: 52.373762,
                lng: 4.834244
            },
            disableDefaultUI: true,
            zoom: 13,
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{color: '#ffffff'}]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{color: 'transparent'}]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#888888'}]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#424242'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#424242'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#ffffff'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#424242'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#ffffff'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#000000'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#ffffff'}]
                }
            ]
        });

        const marker = new google.maps.Marker({
            position: {
                lat: 52.373762,
                lng: 4.834244
            },
            map: map,
        });
    }

    // Map with several markers
    const markerListMapWrap = document.getElementById('map-marker-list');

    if (!markerListMapWrap) return;

    const multimarkerMap = new google.maps.Map(markerListMapWrap, {
        center: {
            lat: -33.92,
            lng: 151.25
        },
        disableDefaultUI: true,
        zoom: 13,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{color: '#eeeeee'}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{color: '#888888'}]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#424242'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#424242'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#424242'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#000000'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ffffff'}]
            }
        ]
    });

    const markerList = [
        {
            name: 'Bondi Beach',
            total: 65.99,
            lat: -33.890542,
            lng: 151.274856,
            img: './img/templates/rooms(1).jpg',
            index: 4
        },
        {
            name: 'Coogee Beach',
            total: 65.99,
            lat: -33.923036,
            lng: 151.259052,
            img: './img/templates/rooms(2).jpg',
            index: 5
        },
        {
            name: 'Cronulla Beach',
            total: 65.99,
            lat: -34.028249,
            lng: 151.157507,
            img: './img/templates/rooms(3).jpg',
            index: 3
        },
        {
            name: 'Manly Beach',
            total: 65.99,
            lat: -33.80010128657071,
            lng: 151.28747820854187,
            img: './img/templates/rooms(1).jpg',
            index: 2
        },
        {
            name: 'Maroubra Beach',
            total: 65.99,
            lat: -33.950198,
            lng: 151.259302,
            img: './img/templates/rooms(2).jpg',
            index: 1
        }
    ];

    const infowindow = new google.maps.InfoWindow();

    markerList.forEach(function(item, i) {
        const content = '<div class="map-card"><div class="map-card__img">'
            + '<img src="' + item.img + '" alt="' + item.img + '" /></div>'
            + '<div class="map-card__info"><img src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" alt="spotlight-poi2.png" />'
            + '<h3 class="map-card__title">' + item.name +'</h3>'
            + '<p class="map-card__text simple-text">From '
            + '<span class="map-card__cost">£' + item.total + '</span>per night'
            + '</p></div></div>'
        ;

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.lat, item.lng),
            map: multimarkerMap
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(content);
                infowindow.open(multimarkerMap, marker);
            }
        })(marker, i));

        google.maps.event.addListener(multimarkerMap, 'click',(function(marker, i) {
            return function() {
                infowindow.close(multimarkerMap, marker);
            }
        })(marker, i));

        google.maps.event.addListener(multimarkerMap, 'click',(function(marker, i) {
            return function() {
                infowindow.close(multimarkerMap, marker);
            }
        })(marker, i));
    });
}
