import nodemailer from "nodemailer";

export default async function mailer(req, res) {
  const { name, surname, email, service_type, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      //   user: process.env.SMTP_USER, se vogliamo inserire le credenziali su env
      //   pass: process.env.SMTP_PASSWORD,
      user: "mitha.creatives@gmail.com",
      pass: "cgopkuxoayjcyelt",
    },
  });

  try {
    await transporter.sendMail({
      from: "mitha.creatives@gmail.com",
      to: ["mitha.creatives@gmail.com"],
      subject: `elisa. da ${name} ${surname} `,

      html: ` 
      <div style="font-size:16px; padding:4px; margin-bottom:20px;">Tipo di servizio : ${service_type} </div>

<div >
<div style="font-size:16px; margin-top: 20px">Sono ${name} ${surname},</div>
<div style="font-size:16px; padding:4px; margin-bottom:20px;">
${message}
</div>
<div>
Referenze del contatto: 
</div>

<ul>
<li>
${email}
</li></ul>

</div>
‍


    </div>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
