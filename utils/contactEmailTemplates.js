const BRAND = {
  main: "#39373c",
  red: "#de4928",
  muted: "#606060",
  background: "#f7f6f4",
  white: "#ffffff",
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const serviceLabels = {
  logo: "Logo Design",
  label: "Label Design",
  branding: "Branding",
  social: "Social Media",
  altro: "Altro",
};

const sourceLabels = {
  passaparola: "Passaparola",
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google Search",
  linkedin: "LinkedIn",
};

const safeHeaderText = (value = "") =>
  String(value).replace(/[\r\n]+/g, " ").trim();

const normalizeContact = (data) => ({
  name: String(data.name || "").trim(),
  work: String(data.work || "").trim(),
  email: String(data.email || "").trim(),
  message: String(data.message || "").trim(),
  services:
    Array.isArray(data.services) && data.services.length > 0
      ? data.services.map((service) => serviceLabels[service] || service)
      : ["Non specificato"],
  price: String(data.price || "Non specificato"),
  source: sourceLabels[data.source] || data.source || "Non specificato",
});

const detailRow = (label, value) => `
  <tr>
    <td style="padding:0 0 6px;color:${BRAND.red};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">
      ${escapeHtml(label)}
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 22px;color:${BRAND.main};font-family:Arial,sans-serif;font-size:17px;line-height:1.55;white-space:pre-line;">
      ${escapeHtml(value)}
    </td>
  </tr>`;

const emailShell = ({ preview, eyebrow, title, intro, content, footer }) => `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.background};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${BRAND.background};">
      <tr>
        <td align="center" style="padding:32px 14px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:${BRAND.white};border:1px solid #e3e0dc;">
            <tr>
              <td style="padding:25px 34px;background:${BRAND.main};">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="color:${BRAND.white};font-family:Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.5px;">&#123; MIAO <span style="color:${BRAND.red};">graphics</span></td>
                    <td align="right" style="color:#b9b7bb;font-family:Arial,sans-serif;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;">Grafismi itineranti</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr><td style="height:7px;background:${BRAND.red};font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr>
              <td style="padding:42px 34px 16px;">
                <div style="margin-bottom:12px;color:${BRAND.red};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;">${escapeHtml(eyebrow)}</div>
                <h1 style="margin:0;color:${BRAND.main};font-family:Arial,sans-serif;font-size:34px;line-height:1.08;letter-spacing:-1px;">${escapeHtml(title)}</h1>
                <p style="margin:18px 0 0;color:${BRAND.muted};font-family:Arial,sans-serif;font-size:17px;line-height:1.65;">${intro}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 34px 42px;">${content}</td>
            </tr>
            <tr>
              <td style="padding:24px 34px;background:${BRAND.main};color:#c7c5c8;font-family:Arial,sans-serif;font-size:12px;line-height:1.7;">
                ${footer}<br />
                <a href="https://www.miaographics.it" style="color:${BRAND.white};font-weight:700;text-decoration:none;">miaographics.it</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:miaographics@gmail.com" style="color:${BRAND.white};font-weight:700;text-decoration:none;">miaographics@gmail.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const createInternalContactEmail = (rawData) => {
  const data = normalizeContact(rawData);
  const content = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${BRAND.background};border-left:5px solid ${BRAND.red};">
      <tr><td style="padding:28px 28px 6px;">
        ${detailRow("Nome e cognome", data.name)}
        ${detailRow("Azienda o progetto", data.work)}
        ${detailRow("Email", data.email)}
        ${detailRow("Servizi", data.services.join(", "))}
        ${detailRow("Budget indicativo", data.price)}
        ${detailRow("Come ha conosciuto MIAO", data.source)}
      </td></tr>
    </table>
    <div style="margin-top:28px;color:${BRAND.red};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Messaggio</div>
    <div style="margin-top:10px;padding:24px;background:${BRAND.white};border:1px solid #e3e0dc;color:${BRAND.main};font-family:Arial,sans-serif;font-size:17px;line-height:1.7;white-space:pre-line;">${escapeHtml(data.message)}</div>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;"><tr><td style="background:${BRAND.red};">
      <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Re: richiesta ${data.work}`)}" style="display:inline-block;padding:15px 24px;color:${BRAND.white};font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">Rispondi a ${escapeHtml(data.name)}</a>
    </td></tr></table>`;

  return {
    subject: `Nuova richiesta dal sito — ${safeHeaderText(data.name)} / ${safeHeaderText(data.work)}`,
    html: emailShell({
      preview: `${data.name} ha inviato una nuova richiesta dal sito`,
      eyebrow: "Nuovo contatto dal sito",
      title: `${data.name} vuole parlarti di un progetto.`,
      intro: `Hai ricevuto una nuova richiesta da <strong style="color:${BRAND.main};">${escapeHtml(data.work)}</strong>. Tutti i dettagli sono raccolti qui sotto.`,
      content,
      footer: "Messaggio inviato dal form contatti di MIAO graphics. Consenso privacy acquisito.",
    }),
    text: `NUOVA RICHIESTA DAL SITO\n\nNome: ${data.name}\nAzienda/progetto: ${data.work}\nEmail: ${data.email}\nServizi: ${data.services.join(", ")}\nBudget: ${data.price}\nProvenienza: ${data.source}\n\nMessaggio:\n${data.message}\n\nConsenso privacy acquisito.`,
  };
};

export const createCustomerConfirmationEmail = (rawData) => {
  const data = normalizeContact(rawData);
  const content = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${BRAND.background};border-left:5px solid ${BRAND.red};">
      <tr><td style="padding:28px 28px 6px;">
        ${detailRow("Progetto", data.work)}
        ${detailRow("Servizi di interesse", data.services.join(", "))}
        ${detailRow("Budget indicativo", data.price)}
        ${detailRow("Il tuo messaggio", data.message)}
      </td></tr>
    </table>
    <p style="margin:28px 0 0;color:${BRAND.main};font-family:Arial,sans-serif;font-size:17px;line-height:1.7;">Nel frattempo puoi dare un’occhiata ai progetti selezionati.</p>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:18px;"><tr><td style="background:${BRAND.red};">
      <a href="https://www.miaographics.it/portfolio" style="display:inline-block;padding:15px 24px;color:${BRAND.white};font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">Scopri il portfolio</a>
    </td></tr></table>`;

  return {
    subject: `Grazie ${safeHeaderText(data.name)}, ho ricevuto la tua richiesta`,
    html: emailShell({
      preview: "MIAO graphics ha ricevuto la tua richiesta",
      eyebrow: "Richiesta ricevuta",
      title: `Grazie ${data.name}, ci siamo!`,
      intro: "Ho ricevuto il tuo messaggio e lo leggerò con attenzione. Ti risponderò normalmente entro <strong style=\"color:#39373c;\">1–2 giorni lavorativi</strong>. Qui trovi il riepilogo di ciò che mi hai inviato.",
      content,
      footer: "Questa è una conferma automatica. Puoi rispondere direttamente a questa email per aggiungere informazioni.",
    }),
    text: `Ciao ${data.name},\n\ngrazie per aver contattato MIAO graphics. Ho ricevuto la tua richiesta e ti risponderò normalmente entro 1–2 giorni lavorativi.\n\nRIEPILOGO\nProgetto: ${data.work}\nServizi: ${data.services.join(", ")}\nBudget: ${data.price}\nMessaggio: ${data.message}\n\nMIAO graphics\nhttps://www.miaographics.it`,
  };
};
