import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

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

  try {
    await transporter.sendMail({
      from: `MIAO graphics <${smtpUser}>`,
      replyTo: email,
      to: ["miaographics@gmail.com", "arvine82@gmail.com"],
      subject: `${name} di ${work} ti scrive dal sito`,
      html: `
        <div style="font-size:16px; padding:4px; margin-bottom:20px;">
          Tipo di servizio: ${escapeHtml(services?.join(", ") || "Non specificato")}
        </div>
        <div style="font-size:16px; padding:4px; margin-bottom:20px;">
          Budget indicativo: ${escapeHtml(price || "Non specificato")}
        </div>
        <div style="font-size:16px; margin-top:20px;">
          Ha conosciuto MIAO graphics tramite ${escapeHtml(source || "un canale non specificato")}.
        </div>
        <div style="font-size:16px; margin-top:20px;">Sono ${escapeHtml(name)},</div>
        <div style="font-size:16px; padding:4px; margin-bottom:20px;">
          ${escapeHtml(message).replaceAll("\n", "<br />")}
        </div>
        <div>Contatto: ${escapeHtml(email)}</div>
      `,
    });

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
