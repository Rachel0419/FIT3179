// Variable pointing to Map 1 JSON
var vg_1 = "json/map1.json";
vegaEmbed("#map_heatmap", vg_1).catch(console.error);

// Variable pointing to Map 2 JSON
var vg_2 = "json/map2.json";
vegaEmbed("#map_bubble", vg_2).catch(console.error);