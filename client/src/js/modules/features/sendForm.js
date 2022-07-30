window.onload = () => {
	const form = document.querySelector(".contacts__form");

	const sendData = async body => {
		try {
			await fetch("http://localhost:5000/api/email", {
				method: "POST",
				body
			});
		} catch (e) {
			console.log(e);
		}
	};

	form.addEventListener("submit", async e => {
		e.preventDefault();
		sendData(new FormData(e.target));
	});
};
