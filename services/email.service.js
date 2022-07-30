const nodemailer = require("nodemailer");

class EmailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_FROM,
				pass: process.env.SMTP_PASSWORD
			}
		});
	}

	async send({name, email, message}) {
		await this.transporter.sendMail({
			from: process.env.SMTP_FROM,
			to: process.env.SMTP_TO,
			subject: `${name} has contacted!`,
			text: "",
			html: `
				<div>
					<h1>${name}</h1>
					<h2>${email}</h2>
					<p>${message}</p>
				</div>
			`
		});
	}
}

module.exports = new EmailService();
