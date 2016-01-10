var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: []});
var format_BMEpopulation211 = new ol.format.GeoJSON();
var features_BMEpopulation211 = format_BMEpopulation211.readFeatures(geojson_BMEpopulation211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMEpopulation211 = new ol.source.Vector();
jsonSource_BMEpopulation211.addFeatures(features_BMEpopulation211);var lyr_BMEpopulation211 = new ol.layer.Vector({
                source:jsonSource_BMEpopulation211, 
                style: style_BMEpopulation211,
                title: "% BME population 2011"
            });var format_IMD215ofLSOAsinEngland = new ol.format.GeoJSON();
var features_IMD215ofLSOAsinEngland = format_IMD215ofLSOAsinEngland.readFeatures(geojson_IMD215ofLSOAsinEngland, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMD215ofLSOAsinEngland = new ol.source.Vector();
jsonSource_IMD215ofLSOAsinEngland.addFeatures(features_IMD215ofLSOAsinEngland);var lyr_IMD215ofLSOAsinEngland = new ol.layer.Vector({
                source:jsonSource_IMD215ofLSOAsinEngland, 
                style: style_IMD215ofLSOAsinEngland,
                title: "IMD 2015 of LSOAs in England"
            });

lyr_BMEpopulation211.setVisible(true);lyr_IMD215ofLSOAsinEngland.setVisible(true);
var layersList = [baseLayer,lyr_BMEpopulation211,lyr_IMD215ofLSOAsinEngland];
