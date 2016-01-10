var size = 0;
var ranges_BMEpopulation211 = [[1.800000, 18.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})
    })]],
[18.000000, 27.133333, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(209,226,242,1.0)"})
    })]],
[27.133333, 36.900000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(154,199,224,1.0)"})
    })]],
[36.900000, 48.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(81,156,204,1.0)"})
    })]],
[48.000000, 61.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(28,107,176,1.0)"})
    })]],
[61.000000, 96.500000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})
    })]]];
var styleCache_BMEpopulation211={}
var style_BMEpopulation211 = function(feature, resolution){
    var value = feature.get("2011_census_BAME (%)");
    var style = ranges_BMEpopulation211[0][2];
    for (i = 0; i < ranges_BMEpopulation211.length; i++){
        var range = ranges_BMEpopulation211[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_BMEpopulation211[key]){
        var text = new ol.style.Text({
              font: '16.9px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_BMEpopulation211[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_BMEpopulation211[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};