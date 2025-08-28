import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método não permitido" });
  }

  console.log("EMAIL_USER:", process.env.EMAIL_USER ? "OK" : "NÃO CONFIGURADA");
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "OK" : "NÃO CONFIGURADA");

  const { nome, email, pontuacao, nivel, pontosFortes, pontosMelhorar } = req.body;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      ok: false,
      error: "As credenciais do e-mail não estão configuradas corretamente.",
    });
  }

  try {
    // Feedback por nível
    let feedbackNivel = "";
    if (pontuacao <= 4) {
      feedbackNivel =
        "Você está no início da sua jornada. Foque em construir uma base sólida...";
    } else if (pontuacao <= 7) {
      feedbackNivel =
        "Você pode se considerar intermediário. Demonstrou familiaridade...";
    } else {
      feedbackNivel =
        "Excelente! Você demonstrou um conhecimento sólido...";
    }

    const htmlPontosFortes =
      pontosFortes && pontosFortes.length > 0
        ? `<p style="font-size: 16px; color: #666666; margin-top: 10px;">
             <strong>Seus pontos fortes:</strong> ${pontosFortes.join(", ")}
           </p>`
        : `<p style="font-size: 16px; color: #666666; margin-top: 10px;">
             Você sabe um pouco de tudo, então, não tem ainda um ponto forte.
           </p>`;

    const htmlPontosMelhorar =
      pontosMelhorar && pontosMelhorar.length > 0
        ? `<p style="font-size: 16px; color: #666666; margin-top: 10px;">
             <strong>O que você pode fazer:</strong> Reforce seus estudos em: 
             <strong>${pontosMelhorar.join(", ")}</strong>.
           </p>`
        : `<p style="font-size: 16px; color: #666666; margin-top: 10px;">
             Continue praticando e explorando novos conceitos para manter seu conhecimento atualizado.
           </p>`;

    const resultadoHtml = `
      <p style="font-size: 16px; color: #666666;">
        <strong>Pontuação:</strong> Você acertou ${pontuacao} de 10 perguntas.
      </p>
      <p style="font-size: 16px; color: #666666;">
        <strong>Seu Nível:</strong> <strong style="color: #049ed1;">${nivel}</strong>
      </p>
      <p style="font-size: 16px; color: #666666;">${feedbackNivel}</p>
      ${htmlPontosFortes}
      ${htmlPontosMelhorar}
    `;

    const templatePath = path.join(process.cwd(), "backend", "template-email.html");
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    emailTemplate = emailTemplate
      .replace("{{nome}}", nome)
      .replace("{{conteudo_do_resultado}}", resultadoHtml);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DevCheck HouseJs" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Seu resultado DevCheck HouseJS",
      html: emailTemplate,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
