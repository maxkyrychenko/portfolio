import checkInputs from "./validation.js";

const form = document.getElementById("form");
const status = form.querySelector("#status");
const submitBtn = form.querySelector("button[type='submit']");

const clearAfterDelay = (element, delay = 5000) =>
	setTimeout(() => {
		element.innerHTML = "";
	}, delay);

const sendData = async body => {
	submitBtn.disabled = true;
	const response = await fetch("http://localhost:5000/api/email", {
		method: "POST",
		body
	});
	submitBtn.disabled = false;

	if (response.ok) {
		status.classList.add("valid");

		status.textContent = "Form successfully submitted.";
	} else {
		status.classList.remove("valid");

		status.textContent = "Something went wrong.";
	}

	clearAfterDelay(status);
};

form.addEventListener("submit", async e => {
	e.preventDefault();
	const isValid = checkInputs();

	if (isValid) {
		sendData(new FormData(e.target));
	}
});
