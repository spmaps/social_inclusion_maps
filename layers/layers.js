var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: []});
var format_BMEpopulation211 = new ol.format.GeoJSON();
var features_BMEpopulation211 = format_BMEpopulation211.readFeatures(geojson_BMEpopulation211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMEpopulation211 = new ol.source.Vector();
jsonSource_BMEpopulation211.addFeatures(features_BMEpopulation211);var lyr_BMEpopulation211 = new ol.layer.Vector({
                source:jsonSource_BMEpopulation211, 
                style: style_BMEpopulation211,
                attribution: "Testing 123 BME BME",
                title: "<span> BME Population 2011<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_18180.png'> 1.8% - 18.0%<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_180271.png'> 18.0% - 27.1%<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_271369.png'>  27.1% - 36.9%<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_369480.png'>  36.9% - 48.0%<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_480610.png'>  48.0% - 61.0%<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_610965.png'>  61.0% - 96.5%<br></span>"
            });var format_IMD215ofLSOAsinEngland = new ol.format.GeoJSON();
var features_IMD215ofLSOAsinEngland = format_IMD215ofLSOAsinEngland.readFeatures(geojson_IMD215ofLSOAsinEngland, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMD215ofLSOAsinEngland = new ol.source.Vector();
jsonSource_IMD215ofLSOAsinEngland.addFeatures(features_IMD215ofLSOAsinEngland);var lyr_IMD215ofLSOAsinEngland = new ol.layer.Vector({
                source:jsonSource_IMD215ofLSOAsinEngland, 
                style: style_IMD215ofLSOAsinEngland,
                title: "<span> 2015 IMD by LSOAs in England<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_18180.png'> 10% Least Deprived<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_180271.png'> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_271369.png'> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_369480.png'> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_480610.png'> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='legend/BMEpopulation2011_610965.png'> 10% Most Deprived<br></span>"
            });

lyr_BMEpopulation211.setVisible(true);lyr_IMD215ofLSOAsinEngland.setVisible(true);
var layersList = [baseLayer,lyr_BMEpopulation211,lyr_IMD215ofLSOAsinEngland];
