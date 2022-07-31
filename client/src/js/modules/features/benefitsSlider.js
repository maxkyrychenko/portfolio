import Swiper from "swiper";

new Swiper(".benefits-slider", {
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
