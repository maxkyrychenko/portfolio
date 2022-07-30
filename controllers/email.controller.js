const EmailService = require("../services/email.service");

class EmailController {
	static async send(req, res) {
		try {
			const {name, email, message} = req.body;

			await EmailService.send({name, email, message});

			res.json({message: "Email sent."});
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

module.exports = EmailController;
