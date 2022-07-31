import "./filterButtons.js";
import "./filterSlider.js";
import Filter from "../../classes/Filter.js";
import slider from "./filterSlider.js";

const filterButtons = document.querySelectorAll("button[data-filter]");
const filterElements = document.querySelectorAll("div[data-filter]");

new Filter(filterElements, filterButtons, "app", {
	onFilter: () => slider.update()
});
