const filterButtons = document.querySelectorAll("button[data-filter]");
const filterButtonHighlighter = document.querySelector(
	".projects-filter__btn-highlighter"
);

filterButtons.forEach(button => {
	button.addEventListener(
		"click",
		() => (filterButtonHighlighter.style.left = button.offsetLeft + "px")
	);
});
