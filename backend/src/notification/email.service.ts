import { Injectable } from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  sendClientInvitationEmail(invitation) {
    // needs correct template Id
    const msg = {
      to: invitation.email, // Change to your recipient
      from: 'app@powerfullyfittraining.com', // Change to your verified sender
      subject: 'Welcome to Powerfully Fit',
      templateId: 'd-a17a867402784f1ab8ebdd0d372fcaef',

      dynamic_template_data: {
        invitation_id: invitation.id,
      },
      html: 'Powerfully Fit Invitation',
    };

    this.sendEmail(msg);
  }

  sendCoachInvitationEmail(invitation) {
    const msg = {
      to: invitation.email, // Change to your recipient
      from: 'app@powerfullyfittraining.com', // Change to your verified sender
      subject: 'Welcome to Powerfully Fit',
      templateId: 'd-a17a867402784f1ab8ebdd0d372fcaef',
      name: invitation.firstname,

      dynamic_template_data: {
        invitation_id: invitation.id,
      },
      html: 'Powerfully Fit Invitation',
    };

    this.sendEmail(msg);
  }

  sendEmail(msg) {
    sgMail.setApiKey(
      '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',
    );

    sgMail
      .send(msg)
      .then(() => {
        console.log(`Email Sent to ${msg.to}`);
      })
      .catch(error => {
        console.error(error.response.body.errors);
      });
  }
}
