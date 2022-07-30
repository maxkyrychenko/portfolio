import WOW from "wow.js/dist/wow.js";

export const initAnimations = () => {
	const wow = new WOW({mobile: false});

	wow.init();

	const animateText = () => {
		const text = document.querySelector(".intro__title-span");

		window.addEventListener("load", () => {
			text.addEventListener("animationend", () => {
				text.classList.add("off");
			});
		});
	};

	animateText();
};
