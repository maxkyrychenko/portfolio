import Form from "../../classes/Form.js";
import {isNotEmpty, isEmail, isMinLength} from "./validators.js";

const hash = window.location.hash.substring(1);
const status = document.getElementById("status");
const submitBtn = document.querySelector("button[type='submit']");

const handleSubmit = async sendData => {
	submitBtn.disabled = true;

	const response = await sendData("http://localhost:5000/api/email");

	submitBtn.disabled = false;

	if (response.ok) {
		status.classList.add("valid");

		status.textContent =
			hash === "ru" ? "Форма отправлена." : "Form successfully submitted.";
	} else {
		status.classList.remove("valid");

		status.textContent =
			hash === "ru" ? "Что-то пошло не так." : "Something went wrong.";
	}

	setTimeout(() => {
		status.innerHTML = "";
	}, 5000);
};

new Form("#form", {
	onSubmit: handleSubmit,
	validationSchema: {
		name: [
			isNotEmpty(hash === "ru" ? "Введите ваше имя." : "Enter your name.")
		],
		email: [
			isNotEmpty(hash === "ru" ? "Введите ваш email." : "Enter your email."),
			isEmail(hash === "ru" ? "Email некоректен." : "Email is invalid.")
		],
		message: [
			isNotEmpty(hash === "ru" ? "Введите сообщение." : "Enter a message."),
			isMinLength(
				8,
				hash === "ru"
					? "Ваше сообщение должно состоять не менее чем из 8 символов."
					: "Your message must be at least 8 characters long."
			)
		]
	}
});
