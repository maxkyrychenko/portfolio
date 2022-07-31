class Filter {
	constructor(elements, buttons, defaultFilter, handlers = {}) {
		this.buttons = buttons;
		this.elements = elements;
		this.activeFilter = defaultFilter;
		this.handlers = handlers;

		this.#init();
	}

	#init() {
		this.#initButtonListeners();
		this.#setActiveElements(this.activeFilter);
	}

	#setActiveElements(filter) {
		this.elements.forEach(element => {
			if (!element.dataset.filter) {
				throw new Error(
					"The filter element must have a data-filter attribute."
				);
			}

			const isFiltersEqual = element.dataset.filter === filter;

			element.style.display = isFiltersEqual ? "block" : "none";

			if (this.handlers.onFilter) {
				this.handlers.onFilter();
			}

			this.#animateElement(element);
		});
	}

	#animateElement(element) {
		element.classList.remove("wow");
		element.classList.add("animate__animated", "animate__fadeIn");
	}

	#initButtonListeners() {
		this.buttons.forEach(button => {
			if (!button.dataset.filter) {
				throw new Error("The filter button must have a data-filter attribute.");
			}

			button.addEventListener("click", e => {
				this.buttons.forEach(btn => btn.classList.remove("active"));

				const target = e.target;

				this.#setActiveElements(target.dataset.filter);

				target.classList.add("active");
			});
		});
	}
}

export default Filter;
