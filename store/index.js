exports.template = ({ name, email, message }) => ({
  to: [email, 'agmaug@gmail.com'],
  from: 'test@test.com',
  subject: `Notification from Miguel Aguirre.`,
  text: 'Miguel Aguirre DEV',
  html: `<h1>Hi ${name}, thanks for contacting me.</h1>
               <p>I have received the following message:
               </p>
               </br>
               <p>Your message: ${message}</p>
               </br>
               <h5>I will be back to you as soon as possible.</h5>
               <h4>Thanks for your message!</h4>
               `
});
