if (!location.href.includes("#")) {
	location.href = window.location.pathname + "#en";
}

const langButtons = document.querySelectorAll("[data-type='lang-btn']");

langButtons.forEach(button => {
	button.addEventListener("click", () => {
		location.hash = "#" + button.textContent.toLowerCase();
		location.reload();
	});
});

const updateElements = hash => {
	const elements = document.querySelectorAll(`[data-${hash}Lang]`);

	elements.forEach(elem => {
		if (
			(elem.tagName.toLowerCase() === "input" ||
				elem.tagName.toLowerCase() === "textarea") &&
			elem.hasAttribute("placeholder")
		) {
			elem.setAttribute("placeholder", elem.getAttribute(`data-${hash}Lang`));
		} else {
			elem.childNodes[0].nodeValue = elem.getAttribute(`data-${hash}Lang`);
		}
	});
};

const changeLanguage = () => {
	const projectsList =
		document.querySelector(".projects-filter__items") ||
		document.querySelector(".projects-slider__wrapper");
	const hash = window.location.hash.substring(1);

	langButtons.forEach(btn => {
		if (btn.textContent.toLowerCase() === hash) {
			btn.classList.add("active");
			btn.disabled = true;
		}
	});

	updateElements(hash);

	const observer = new MutationObserver(() => updateElements(hash));

	observer.observe(projectsList, {childList: true});
};

changeLanguage();
