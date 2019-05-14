const nodemailer = require("nodemailer");

module.exports = {
  async mailer(recipientMail, confirmationMail) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "",
        pass: ""
      }
    });
    try {
      let info = await transporter.sendMail({
        from: "",
        to: recipientMail,
        subject: "Hello ✔ ",
        text: `Hello world`,
        html:
          "Click this <a href='" + confirmationMail + "'><span>link</span></a>"
      });

      return info;
    } catch (err) {
      return err.message;
    }
  }
};
