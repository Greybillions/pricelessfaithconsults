import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly resend: Resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    this.resend = new Resend(apiKey);
  }

  async sendEnquiry(data: CreateContactDto) {
    const organisation = data.organisation || 'Not provided';

    const { data: email, error } = await this.resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL!],
      replyTo: data.email,

      subject: `${data.enquiry} — ${data.name}`,

      text: `
PRICELESS FAITH CONSULT
NEW WEBSITE ENQUIRY

A new enquiry has been submitted through the Priceless Faith Consult website.

CONTACT DETAILS

Name: ${data.name}
Email: ${data.email}
Organisation: ${organisation}
Enquiry: ${data.enquiry}

MESSAGE

${data.message}

────────────────────────────────────

Reply directly to this email to respond to ${data.name}.
      `.trim(),

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f4f2ee;
              font-family: Arial, Helvetica, sans-serif;
              color: #211f1c;
            "
          >
            <div
              style="
                width: 100%;
                padding: 48px 20px;
                box-sizing: border-box;
              "
            >
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  border: 1px solid #e4e1db;
                "
              >

                <!-- Header -->
                <div
                  style="
                    padding: 34px 40px;
                    background-color: #171717;
                    color: #ffffff;
                  "
                >
                  <div
                    style="
                      font-family: Georgia, 'Times New Roman', serif;
                      font-size: 26px;
                      line-height: 1.2;
                      letter-spacing: -0.02em;
                    "
                  >
                    Priceless Faith
                    <span style="color: #c9a96e;">
                      Consult
                    </span>
                  </div>

                  <div
                    style="
                      width: 36px;
                      height: 1px;
                      margin-top: 18px;
                      background-color: #c9a96e;
                    "
                  ></div>

                  <p
                    style="
                      margin: 18px 0 0;
                      font-size: 10px;
                      line-height: 1.5;
                      font-weight: bold;
                      letter-spacing: 0.18em;
                      text-transform: uppercase;
                      color: #c9a96e;
                    "
                  >
                    New Website Enquiry
                  </p>
                </div>

                <!-- Introduction -->
                <div
                  style="
                    padding: 40px 40px 10px;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      font-family: Georgia, 'Times New Roman', serif;
                      font-size: 24px;
                      line-height: 1.3;
                      color: #211f1c;
                    "
                  >
                    You have received a new enquiry.
                  </p>

                  <p
                    style="
                      margin: 14px 0 0;
                      font-size: 14px;
                      line-height: 1.8;
                      color: #77736d;
                    "
                  >
                    Someone has contacted Priceless Faith Consult through the
                    website. Their details and message are below.
                  </p>
                </div>

                <!-- Contact Details -->
                <div
                  style="
                    margin: 30px 40px 0;
                    border-top: 1px solid #e4e1db;
                    border-bottom: 1px solid #e4e1db;
                  "
                >
                  <div
                    style="
                      padding: 24px 0;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 20px;
                        font-size: 10px;
                        line-height: 1.5;
                        font-weight: bold;
                        letter-spacing: 0.18em;
                        text-transform: uppercase;
                        color: #a8874f;
                      "
                    >
                      Contact Details
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            width: 130px;
                            padding: 7px 0;
                            font-size: 12px;
                            color: #8a8680;
                          "
                        >
                          Name
                        </td>

                        <td
                          style="
                            padding: 7px 0;
                            font-size: 14px;
                            font-weight: 600;
                            color: #211f1c;
                          "
                        >
                          ${escapeHtml(data.name)}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            width: 130px;
                            padding: 7px 0;
                            font-size: 12px;
                            color: #8a8680;
                          "
                        >
                          Email
                        </td>

                        <td
                          style="
                            padding: 7px 0;
                            font-size: 14px;
                            color: #211f1c;
                          "
                        >
                          ${escapeHtml(data.email)}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            width: 130px;
                            padding: 7px 0;
                            font-size: 12px;
                            color: #8a8680;
                          "
                        >
                          Organisation
                        </td>

                        <td
                          style="
                            padding: 7px 0;
                            font-size: 14px;
                            color: #211f1c;
                          "
                        >
                          ${escapeHtml(organisation)}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            width: 130px;
                            padding: 7px 0;
                            font-size: 12px;
                            color: #8a8680;
                          "
                        >
                          Enquiry
                        </td>

                        <td
                          style="
                            padding: 7px 0;
                            font-size: 14px;
                            color: #211f1c;
                          "
                        >
                          ${escapeHtml(data.enquiry)}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <!-- Message -->
                <div
                  style="
                    padding: 34px 40px 40px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 16px;
                      font-size: 10px;
                      line-height: 1.5;
                      font-weight: bold;
                      letter-spacing: 0.18em;
                      text-transform: uppercase;
                      color: #a8874f;
                    "
                  >
                    Message
                  </p>

                  <div
                    style="
                      padding: 22px 24px;
                      background-color: #f8f7f4;
                      border-left: 2px solid #c9a96e;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        font-size: 14px;
                        line-height: 1.8;
                        color: #4d4943;
                        white-space: pre-line;
                      "
                    >
                      ${escapeHtml(data.message)}
                    </p>
                  </div>
                </div>

                <!-- Reply CTA -->
                <div
                  style="
                    padding: 26px 40px;
                    background-color: #f4f2ee;
                    border-top: 1px solid #e4e1db;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      font-size: 12px;
                      line-height: 1.7;
                      color: #77736d;
                    "
                  >
                    <strong style="color: #211f1c;">
                      Ready to respond?
                    </strong>
                    Simply reply to this email. Your response will go directly
                    to ${escapeHtml(data.name)}.
                  </p>
                </div>

                <!-- Footer -->
                <div
                  style="
                    padding: 26px 40px;
                    background-color: #171717;
                    text-align: center;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      font-family: Georgia, 'Times New Roman', serif;
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    Priceless Faith
                    <span style="color: #c9a96e;">
                      Consult
                    </span>
                  </p>

                  <p
                    style="
                      margin: 9px 0 0;
                      font-size: 9px;
                      letter-spacing: 0.16em;
                      text-transform: uppercase;
                      color: #8f8b84;
                    "
                  >
                    Empowering educators · Strengthening schools
                  </p>
                </div>

              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      throw new InternalServerErrorException(
        'Unable to send your enquiry right now.',
      );
    }

    return {
      success: true,
      message: 'Your enquiry has been sent successfully.',
      id: email?.id,
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
