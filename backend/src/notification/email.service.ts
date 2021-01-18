import { Injectable } from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

// import template from './templates/email.template.html';

@Injectable()
export class EmailService {
  sendEmail(
    email: string,
    subject: string = 'Welcome to Powerfully Fit',
    type: string = 'welcome',
  ) {
    sgMail.setApiKey(
      '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',
    );

    const msg = {
      to: email, // Change to your recipient
      from: 'app@powerfullyfittraining.com', // Change to your verified sender
      subject: subject,
      html: 'easy',
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log(`Email Sent to ${email}`);
      })
      .catch(error => {
        console.error(error);
        console.error(error.response.body.errors);
      });
  }
}
