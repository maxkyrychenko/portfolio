class Form {
	constructor(formSelector, options = {}) {
		this.form = document.querySelector(formSelector);
		this.options = options;

		this.form.addEventListener("submit", e => {
			e.preventDefault();

			const isValid = this.#validate();

			if (isValid) {
				if (!this.options.onSubmit) {
					throw new Error("You need to provide onSubmit handler.");
				}

				this.options.onSubmit(this.#sendData.bind(this));
			}
		});
	}

	#sendData(url) {
		const data = new FormData(this.form);

		return fetch(url, {
			method: "POST",
			body: data
		});
	}

	#validate() {
		if (!this.options.validationSchema) {
			throw new Error("You need to provide validation schema.");
		}

		let errors = {};

		// Initialize on input listeners
		for (let key in this.options.validationSchema) {
			const element =
				this.form.querySelector(`input[name=${key}]`) ||
				this.form.querySelector(`textarea[name=${key}]`);

			element.addEventListener("input", e => {
				const value = e.target.value;

				errors[key] = this.options.validationSchema[key]
					.map(validator => validator(value))
					.filter(res => typeof res === "string");

				if (errors[key].length === 0) {
					this.#setSuccessFor(key);
				} else {
					this.#setErrorFor(key, errors[key][0]);
				}
			});
		}

		// Get errors from validators
		for (let key in this.options.validationSchema) {
			const element =
				this.form.querySelector(`input[name=${key}]`) ||
				this.form.querySelector(`textarea[name=${key}]`);

			const value = element.value;

			errors[key] = this.options.validationSchema[key]
				.map(validator => validator(value))
				.filter(res => typeof res === "string");
		}

		for (let key in errors) {
			if (errors[key].length === 0) {
				this.#setSuccessFor(key);
			} else {
				this.#setErrorFor(key, errors[key][0]);
			}
		}

		// If there are no errors
		if (Object.values(errors).every(res => res.length === 0)) {
			return true;
		}

		return false;
	}

	#setErrorFor(name, message) {
		const element =
			this.form.querySelector(`input[name=${name}]`) ||
			this.form.querySelector(`textarea[name=${name}]`);

		const formElement = element.parentElement;

		const label = formElement.querySelector("label");

		label.textContent = message;

		label.classList.add("invalid");
		label.classList.remove("valid");

		element.classList.add("invalid");
		element.classList.remove("valid");
	}

	#setSuccessFor(name) {
		const element =
			this.form.querySelector(`input[name=${name}]`) ||
			this.form.querySelector(`textarea[name=${name}]`);

		const formElement = element.parentElement;

		const label = formElement.querySelector("label");

		label.textContent = "";

		label.classList.remove("invalid");
		label.classList.add("valid");

		element.classList.remove("invalid");
		element.classList.add("valid");
	}
}

export default Form;
