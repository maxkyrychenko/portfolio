import Swiper from "swiper";

const slider = new Swiper(".projects-slider", {
	wrapperClass: "projects-slider__wrapper",
	slideClass: "filter-item",
	breakpoints: {
		600: {
			slidesPerView: 2.2,
			spaceBetween: 8
		},

		500: {
			slidesPerView: 2,
			spaceBetween: 8
		},

		430: {
			slidesPerView: 1.5,
			spaceBetween: 8
		},

		320: {
			slidesPerView: 1.2,
			spaceBetween: 8
		}
	}
});

export default slider;
