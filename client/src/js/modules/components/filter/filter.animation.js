const animationName = "fadeIn";

export const animateOnFilter = item => {
	item.classList.remove("wow");
	item.classList.add("animate__animated", `animate__${animationName}`);
};
