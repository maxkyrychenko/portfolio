import {Project} from "./Project.js";
import {animateOnFilter} from "./filter.animation.js";
import {createFilterSlider, initFilterSlider} from "./filter.slider.js";

export const initFilter = () => {
	const buttons = document.querySelectorAll(".projects-filter__btn");
	const buttonHighlighter = document.querySelector(
		".projects-filter__btn-highlighter"
	);
	const filterParent = document.querySelector(".projects-filter");
	const project = new Project();

	let filterItems = [
		project.create({
			title: "Cooper",
			desc: "Приложение для поиска команды.",
			filter: "app",
			url: "http://164.92.253.49:5000/",
			bg: "url('../images/cooper.png')",
			english: {
				title: "Cooper",
				desc: "A team search full-stack app. Stack used: MERN. Front-end: React, Typescript, Styled-components, Formik. Back-end: Node JS, MongoDB, Express."
			}
		}),
		project.create({
			title: "Helping hand (in development)",
			desc: "Приложение для поиска команды.",
			url: "https://github.com/Kemzi-coder/helping-hand",
			bg: "url('../images/helping-hand.png')",
			filter: "app",
			english: {
				title: "Helping hand (in development)",
				desc: "Q&A app for students. Stack used: React, Typescript, Redux Toolkit, CSS modules, Formik."
			}
		}),
		project.create({
			title: "Drive moto",
			url: "https://kemzi-coder.github.io/shop/",
			desc: "Интернет-магазин. Используемый стек: Javascript, HTML, SCSS, Swiper.",
			bg: "url('../images/shop.png')",
			filter: "website",
			english: {
				title: "Drive moto",
				desc: "Online store. Stack used: Javascript, HTML, SCSS, Swiper."
			}
		}),
		project.create({
			title: "SBIRI",
			url: "https://kemzi-coder.github.io/SBIRI/",
			desc: "Сайт венчурного вонда. Используемый стек: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js.",
			bg: "url('../images/sbiri.png')",
			filter: "website",
			english: {
				title: "SBIRI",
				desc: "Venture Wound's website. Stack used: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js."
			}
		}),
		project.create({
			title: "GO-SURF",
			url: "https://kemzi-coder.github.io/go-surf/",
			desc: "Лендинг магазина досок для серфинга. Используемый стек: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js.",
			bg: "url('../images/gosurf.png')",
			filter: "website",
			english: {
				title: "GO-SURF",
				desc: "Surfboard store landing. Stack used: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js."
			}
		}),
		project.create({
			title: "Studio",
			url: "https://kemzi-coder.github.io/studio/",
			desc: "Лендинг студии. Используемый стек: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js.",
			bg: "url('../images/gosurf.png')",
			filter: "website",
			english: {
				title: "GO-SURF",
				desc: "Surfboard store landing. Stack used: Javascript, HTML, SCSS, Swiper, Animate.css, Wow.js."
			}
		})
	];

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
