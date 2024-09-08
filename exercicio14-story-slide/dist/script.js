import Slide from "./classes/Slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
const time = 3000;
if (container && elements && elements.children.length && controls) {
    const slide = new Slide(container, Array.from(elements.children), controls, time);
}
//# sourceMappingURL=script.js.map