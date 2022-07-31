import {TRANSITION_TIME} from "../constants/index.js";

const burger = document.querySelector(".header__burger");
const headerPanel = document.querySelector(".header__panel");
const body = document.body;

const burgerClasses = status => {
	if (status === "add") {
		burger.classList.toggle("active");
		headerPanel.classList.toggle("active");
		body.classList.toggle("lock");
	} else if (status === "remove") {
		burger.classList.remove("active");
		headerPanel.classList.remove("active");
		body.classList.remove("lock");
	}
};

burger.addEventListener("click", () => {
	burgerClasses("add");
});

headerPanel.addEventListener("click", e => {
	if (e.target.dataset.type === "menu-link") {
		setTimeout(() => {
			burgerClasses("remove");
		}, TRANSITION_TIME);
	}
});
