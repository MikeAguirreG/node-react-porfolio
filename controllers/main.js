const catalog = './store/catalog.json';
const fs = require('fs');
const sendgrid = require('@sendgrid/mail');
const { template } = require('../store');
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY);

exports.catalog = (req, res) => {
  fs.readFile(catalog, 'utf8', (error, data) => {
    if (error) {
      return res.status(400).json({
        error: error
      });
    }
    return res.send(JSON.parse(data));
  });
};

exports.sendmail = (req, res) => {
  const message = template({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  // can be sendgrid.send() or sendgrid.sendMultiple()
  sendgrid
    .sendMultiple(message)
    .then(() => res.json('Message sent, thanks for contacting me.'))
    .catch(() =>
      res
        .status(400)
        .json(
          'Please try later, or you can contact me directly agmaug@gmail.com'
        )
    );
};
