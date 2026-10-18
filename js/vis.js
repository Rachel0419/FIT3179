// Shared options: hide the Vega "..." menu so the cards stay clean
const OPTS = { actions: false };
const draw = (target, spec) => vegaEmbed(target, spec, OPTS).catch(console.error);

// PART 1: GEOSPATIAL MAPS (dot, bin, proportional symbol, flow)
draw("#map_dot", "json/map1.json");
draw("#map_bin", "json/map2.json");
draw("#map_symbol", "json/map3.json");
draw("#map_flow", "json/map4.json");

// PART 2: ADVANCED VISUAL ANALYTICS
draw("#chart4", "json/chart4.json");
draw("#chart5", "json/chart5.json");
draw("#chart6", "json/chart6.json");
draw("#chart7", "json/chart7.json");
draw("#chart8", "json/chart8.json");
draw("#chart9", "json/chart9.json");
draw("#chart10", "json/chart10.json");
draw("#chart11", "json/chart11.json");

// Highlight the nav link of the section currently on screen
const navLinks = document.querySelectorAll(".topnav a");
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href")));
const setActive = () => {
  let current = sections[0];
  for (const s of sections) if (s.getBoundingClientRect().top < 120) current = s;
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
};
window.addEventListener("scroll", setActive, { passive: true });
setActive();
