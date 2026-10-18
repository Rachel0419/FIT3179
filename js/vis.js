// Shared options: hide the Vega "..." menu so the cards stay clean
const OPTS = { actions: false };
const draw = (target, spec) => vegaEmbed(target, spec, OPTS).catch(console.error);

// PART 1: GEOSPATIAL MAPS
draw("#map_region", "json/map1.json");
draw("#map_flow", "json/map12.json");
draw("#map_bubble", "json/map2.json");
draw("#map_grid", "json/map3.json");

// PART 2: ADVANCED VISUAL ANALYTICS
draw("#chart4", "json/chart4.json");
draw("#chart5", "json/chart5.json");
draw("#chart6", "json/chart6.json");
draw("#chart7", "json/chart7.json");
draw("#chart8", "json/chart8.json");
draw("#chart9", "json/chart9.json");
draw("#chart10", "json/chart10.json");
draw("#chart11", "json/chart11.json");