import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  sendmail: true,
});

export const sendCode = async (email: string, code: string) => {
  try {
    await transporter.sendMail({
      from: 'tyler@tygr.info',
      to: email,
      subject: 'Reset password',
      text: `Here is the reset code for your account: ${code}`,
    });
  } catch (err) {
    console.error(err);
  }
};
