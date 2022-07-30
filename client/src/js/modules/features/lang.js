window.onload = () => {
	const langBtns = document.querySelectorAll('[data-type="lang-btn"]');

	if (!location.href.includes("#")) {
		location.href = window.location.pathname + "#en";
	}

	langBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			location.hash = "#" + btn.textContent.toLowerCase();
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
		let hash = window.location.hash;
		hash = hash.substring(1);

		langBtns.forEach(btn => {
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
};
