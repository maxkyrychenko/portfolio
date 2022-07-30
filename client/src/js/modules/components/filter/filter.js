import {Project} from "./Project.js";
import {animateOnFilter} from "./filter.animation.js";
import {createFilterSlider, initFilterSlider} from "./filter.slider.js";
import data from "../../data/index.json";

export const initFilter = () => {
	const buttons = document.querySelectorAll(".projects-filter__btn");
	const buttonHighlighter = document.querySelector(
		".projects-filter__btn-highlighter"
	);
	const filterParent = document.querySelector(".projects-filter");
	const project = new Project();

	let filterItems = data.projects.map(item => project.create(item));

	const createItems = className => {
		const $items = document.createElement("div");
		$items.classList.add(className);
		return $items;
	};

	const animateOnScroll = (item, animationName) => {
		item.setAttribute("data-wow-offset", "250");
		item.className += ` wow animate__animated animate__${animationName}`;
	};

	let slider;
	let items;

	if (window.innerWidth <= 625) {
		slider = createFilterSlider();
		filterParent.append(slider);
	} else {
		items = createItems("projects-filter__items");
		filterParent.append(items);
	}

	const filterSlider = initFilterSlider();

	buttons.forEach(button => {
		// Filtering all items to items with the same data-filter option as btn's
		const filteredItems = filterItems.filter(filterItem => {
			return filterItem.dataset.filter === button.dataset.filter;
		});

		// Default items
		if (button.classList.contains("active") && slider) {
			filteredItems.forEach((filteredItem, index) => {
				filteredItem.classList.add("swiper-slide");
				filterSlider.addSlide(index, filteredItem);
			});
		} else if (button.classList.contains("active")) {
			filteredItems.forEach(filteredItem => {
				items.append(filteredItem);
				animateOnScroll(filteredItem, "fadeIn");
			});
		}

		button.addEventListener("click", () => {
			// Removing class active for all btns
			buttons.forEach(btn => btn.classList.remove("active"));

			if (slider) {
				// Clearing slider
				filterSlider.removeAllSlides();
				// Adding slides that have the same filter option to slider
				filteredItems.forEach((filteredItem, index) => {
					filteredItem.classList.add("swiper-slide");
					filterSlider.addSlide(index, filteredItem);
				});
			} else {
				// Clearing items
				items.innerHTML = "";

				// Adding items that have the same filter option to items element (block)
				filteredItems.forEach(filteredItem => {
					items.append(filteredItem);
					animateOnFilter(filteredItem);
				});
			}

			// Adding class active to btn
			button.classList.add("active");
			// Moving highlighter to btn
			buttonHighlighter.style.left = button.offsetLeft + "px";
		});
	});
};
