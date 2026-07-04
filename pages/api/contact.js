import nodemailer from "nodemailer";
import {
  createCustomerConfirmationEmail,
  createInternalContactEmail,
} from "@/utils/contactEmailTemplates";

export default async function mailer(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Metodo non consentito." });
  }

  const {
    name,
    work,
    email,
    source,
    services,
    price,
    message,
    privacyAccepted,
  } = req.body;
  const smtpUser = process.env.NODEMAILER_USER;
  const smtpPass = process.env.NODEMAILER_PASS;

  if (!smtpUser || !smtpPass) {
    console.error("[api/contact] Configurazione SMTP mancante");
    return res.status(500).json({
      error: "Il servizio email non è configurato correttamente.",
    });
  }

  if (!name || !work || !email || !message) {
    return res.status(400).json({ error: "Compila tutti i campi obbligatori." });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    return res.status(400).json({ error: "Inserisci un indirizzo email valido." });
  }

  if (privacyAccepted !== true) {
    return res.status(400).json({
      error: "È necessario prendere visione dell’informativa privacy.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const contactData = {
    name,
    work,
    email: normalizedEmail,
    source,
    services,
    price,
    message,
  };
  const internalEmail = createInternalContactEmail(contactData);
  const confirmationEmail = createCustomerConfirmationEmail(contactData);

  try {
    await transporter.sendMail({
      from: `MIAO graphics <${smtpUser}>`,
      replyTo: normalizedEmail,
      to: ["miaographics@gmail.com", "arvine82@gmail.com"],
      ...internalEmail,
    });

    try {
      await transporter.sendMail({
        from: `MIAO graphics <${smtpUser}>`,
        replyTo: "miaographics@gmail.com",
        to: normalizedEmail,
        ...confirmationEmail,
      });
    } catch (confirmationError) {
      console.error("[api/contact] Autorisposta non inviata", {
        code: confirmationError.code,
        responseCode: confirmationError.responseCode,
        message: confirmationError.message,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[api/contact] Invio email fallito", {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      message: error.message,
    });
    return res.status(500).json({
      error: "Non è stato possibile inviare il messaggio. Riprova più tardi.",
    });
  }
}
