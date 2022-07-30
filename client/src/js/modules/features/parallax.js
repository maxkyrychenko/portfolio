export const initParallaxEffect = () => {
	const circles = document.querySelectorAll(".circle");

	circles.forEach(circle => {
		window.addEventListener("mousemove", e => {
			const x = e.pageX / window.innerWidth;
			const y = e.pageY / window.innerHeight;

			circle.style.transform = `translate(${"-" + x * 15 + "px"}, ${
				"-" + y * 15 + "px"
			})`;
		});
	});
};
