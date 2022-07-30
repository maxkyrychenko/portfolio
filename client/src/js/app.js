import * as fns from "./modules/functions.js";
import {initFilter} from "./modules/components/filter/filter.js";
import {initAnchorsSmoothScroll} from "./modules/features/anchors.js";
import {initBurger} from "./modules/components/burger/burger.js";
import {initParallaxEffect} from "./modules/features/parallax.js";
import {initAnimations} from "./modules/features/animations.js";
import "./modules/features/lang.js";
import "./modules/features/sendForm.js";
import {initBenefitsSlider} from "./modules/components/benefits/benefits.slider.js";

export const transitionTime = 400;
export const mainColor = "#0177FD";

const functions = [
	initAnchorsSmoothScroll,
	initBurger,
	initFilter,
	initParallaxEffect,
	initBenefitsSlider,
	initAnimations
];

functions.forEach(fn => {
	if (fn.name !== "initBenefitsSlider" || window.innerWidth <= 640) {
		fn();
	}
});

fns.isWebp();
