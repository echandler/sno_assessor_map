// This file has to load first.
var theMap = {};

    // TODO: Only parameters or default values should go in parameters.
    theMap.parameters = {
        URL_PREFIX: 'http://forwarding-proxy.appspot.com/',//http://192.168.56.1:1000
        APN_URL: 'https://www.snoco.org/proptax/search.aspx?parcel_number=',
        SEARCH_BY_APN_URL: 'gis.snoco.org/servlet/com.esri.esrimap.Esrimap?ServiceName=Assessor&ClientVersion=9.3.1&Form=True&Encode=False&CustomService=Query',
        MAP_URL: 'gis.snoco.org/servlet/com.esri.esrimap.Esrimap?ServiceName=Assessor&ClientVersion=9.4.1&Form=True&Encode=False?',
        PROPERTY_INFO_URL: 'gis.snoco.org/servlet/com.esri.esrimap.Esrimap?ServiceName=Assessor&ClientVersion=9.3.0&Form=True&Encode=False&CustomService=Query',
        PROPERTY_IMG_URL: 'http://www.snoco.org/docs/sas/photos/',

        SHOW_2_MAPS_AT_THE_SAME_TIME: true,

        HOME_SOLD_YEARS: { years: [ [ '2014', 'rgba(255, 0, 0, 0.5)' /* <-- back ground color*/ ], [ '2013', 'rgba(255, 255, 0, 0.5)' ], [ '2012', 'rgba(173, 216, 230, 0.5)' ] ], }, // This updates the options panel, the ArcXML needs to be changed manually also.

        SATELLITE_MAP_YEARS: { a: { year: '2012', layerId: '39' }, b: { year: '2007', layerId: '2' } },

        FULL_ZOOM_MIN_X: 1244781.997,
        FULL_ZOOM_MAX_X: 1622342.497,
        FULL_ZOOM_MIN_Y: 284336.973,
        FULL_ZOOM_MAX_Y: 477544.783,

        // To set the panning sensitivity default:
        // 1) Change panningAnimationMultiplier. (Default is 10)
        // 2) optional: Change the sliders CSS right property. (Default 0% right)
        // 3) Optional: Change theMap.panning_module.panningControlsliderMove, add panningAnimationMultiplier + 1 to the multiplier. (default is 11)
        PANNING_ANIMATION_MULTIPLIER   : 10, // default is 10.
        PANNING_ANIMATION_TRUE_OR_FALSE: true,
        PANNING_ANIMATION_TIME         : 1000, // default is 1000.

        MAX_WIDTH     : 1920, // default 1920.
        MAX_HEIGHT    : 1080, // default 1080.
        MAX_IMG_PIXELS: 1920*1080, // default 1920*1080. It appears that this is the max amount of pixels for an image, anything larger generates a image too large error.

        OPTIONS_CHECK_MARK_DEFAULTS: {
            showCities_CheckMark        : true,
            showSatelliteView_CheckMark : false, // One of the [a|b]satelliteYearMap_CheckMark needs their visibilty set to true.
            aSatelliteYearMap_CheckMark : true,
            bSatelliteYearMap_CheckMark : false,
            showPropertyImage_CheckMark : false,
            showParcelBoundary_CheckMark: true,
            showParcelNumbers_CheckMark : false,
            showAddresses_CheckMark     : true,
        },
    };

var $ = document.getElementById.bind(document),
    t = undefined; // This is used to make the multi family markers shorter, look in marker_module for assignment.
