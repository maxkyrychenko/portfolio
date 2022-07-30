import Swiper from "swiper";

const createBenefitsSlider = () => {
	const $slider = document.createElement("div");

	$slider.classList.add("benefits-slider", "swiper-container");
	$slider.insertAdjacentHTML(
		"beforeend",
		`<div class="benefits-slider__wrapper swiper-wrapper"></div>`
	);

	const sliderWrapper = $slider.querySelector(".benefits-slider__wrapper");
	const benefitsWrapper = document.querySelector(".benefits__wrapper");
	const benefits = document.querySelectorAll(".benefit");

	benefitsWrapper.innerHTML = "";

	benefits.forEach(benefit => {
		benefit.classList.add("swiper-slide");
		sliderWrapper.append(benefit);
	});

	benefitsWrapper.append($slider);

	return $slider;
};

export const initBenefitsSlider = () => {
	createBenefitsSlider();

	return new Swiper(".benefits-slider", {
		wrapperClass: "benefits-slider__wrapper",
		slideClass: "benefit",
		slidesPerView: 1.2,

		breakpoints: {
			480: {
				slidesPerView: 1.2,
				spaceBetween: 15
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			}
		}
	});
};
