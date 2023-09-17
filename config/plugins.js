module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.ethereal.email"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("NODEMAILEREMAIL"),
          pass: env("NODEMAILERPASSWORD"),
        },
      },
      // ... any custom nodemailer options      },
      settings: {
        defaultFrom: "mark78@ethereal.email",
        defaultReplyTo: "tracey69@ethereal.email",
      },
    },
  },
  // ...
});
