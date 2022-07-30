const form = document.getElementById("form");
const name = form.querySelector("#name");
const email = form.querySelector("#email");
const message = form.querySelector("#message");

let hash = window.location.hash.substring(1);

function checkInputs() {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();

	function initListeners() {
		name.addEventListener("input", e => {
			nameValidation(e.target.value);
		});

		email.addEventListener("input", e => {
			emailValidation(e.target.value);
		});

		message.addEventListener("input", e => {
			messageValidation(e.target.value);
		});
	}

	initListeners();

	const isNameValid = nameValidation(nameValue);

	const isMessageValid = messageValidation(messageValue);

	const isEmailValid = emailValidation(emailValue);

	return isNameValid && isMessageValid && isEmailValid;
}

function setSuccessFor(item) {
	const formItem = item.parentElement;
	const label = formItem.querySelector("label");
	const input =
		formItem.querySelector("input") || formItem.querySelector("textarea");

	label.textContent = "";

	label.classList.remove("invalid");
	input.classList.remove("invalid");
	label.classList.add("valid");
	input.classList.add("valid");
}

function setErrorFor(item, message) {
	const formItem = item.parentElement;
	const label = formItem.querySelector("label");
	const input =
		formItem.querySelector("input") || formItem.querySelector("textarea");

	label.textContent = message;

	label.classList.add("invalid");
	input.classList.add("invalid");
	label.classList.remove("valid");
	input.classList.remove("valid");
}

function messageValidation(value) {
	let isValid = false;

	if (value === "") {
		setErrorFor(
			message,
			hash === "ru" ? "Введите ваше сообщение." : "Please enter your message."
		);
	} else if (!lengthIsCorrect(value, 8)) {
		setErrorFor(
			message,
			hash === "ru"
				? "Ваше сообщение должно состоять не менее чем из 8 символов."
				: "Your message must consist of at least 8 characters."
		);
	} else {
		isValid = true;
		setSuccessFor(message);
	}

	return isValid;
}

function nameValidation(value) {
	let isValid = false;

	if (value === "") {
		setErrorFor(
			name,
			hash === "ru" ? "Введите ваше имя." : "Please enter your name."
		);
	} else {
		isValid = true;
		setSuccessFor(name);
	}

	return isValid;
}

function emailValidation(value) {
	let isValid = false;

	if (value === "") {
		setErrorFor(
			email,
			hash === "ru" ? "Введите ваш email." : "Please enter your email."
		);
	} else if (!isEmail(value)) {
		setErrorFor(
			email,
			hash === "ru" ? "Email некоректен." : "Email is invalid."
		);
	} else {
		isValid = true;
		setSuccessFor(email);
	}

	return isValid;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

function lengthIsCorrect(value, length) {
	return value.length > length;
}

export default checkInputs;
