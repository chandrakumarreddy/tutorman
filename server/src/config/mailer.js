const nodemailer = require("nodemailer");

module.exports = {
  async mailer(recipientMail, confirmationMail) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "testemailus400@gmail.com",
        pass: "Testemail@1"
      }
    });
    const link = "http://localhost:3000/confirmation_mail/" + confirmationMail;
    try {
      let info = await transporter.sendMail({
        from: "testemail400@gmail.com",
        to: recipientMail,
        subject: "Hello ✔ ",
        text: `Hello world`,
        html: "Click this <a href='" + link + "'><span>link</span></a>"
      });

      return info;
    } catch (err) {
      return err.message;
    }
  }
};
