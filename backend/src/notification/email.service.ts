import { Injectable } from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  sendEmail() {
    sgMail.setApiKey(
      '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',
    );

    const msg = {
      to: 'faridgarciayala@icloud.com', // Change to your recipient
      from: 'app@powerfullyfittraining.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch(error => {
        console.error(error);
        console.error(error.response.body.errors);
      });
  }
}
