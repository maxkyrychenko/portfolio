export class Project {
	constructor() {
		this.parentClass = "filter-item";
	}

	toHTML(options) {
		return `
			<a class="${this.parentClass}__body" href="${
			options.url || "https://github.com/Kemzi-coder"
		}" target="_blank" style="background: ${
			options.bg || "#0177FD"
		}; background-size: cover;">
				<div class="${this.parentClass}__block">
					<h5 class="${this.parentClass}__title" data-enLang="${
			options.english === undefined ? "Title" : options.english.title || "Title"
		}">
						${options.title || "Project title"}
					</h5>
					<p class="${this.parentClass}__text" data-enLang="${
			options.english === undefined ? "Desc" : options.english.desc || "Desc"
		}">
						${options.desc || "Project description"}
					</p>
				</div>
			</a>
		`;
	}

	createParent() {
		const $parent = document.createElement("div");
		$parent.className = this.parentClass;

		return $parent;
	}

	create(options) {
		this.parent = this.createParent();
		this.parent.setAttribute("data-filter", options.filter || "app");

		this.parent.insertAdjacentHTML("beforeend", this.toHTML(options));

		return this.parent;
	}
}
