const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // carrega variáveis do .env

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.post("/send-email", async (req, res) => {
  const { nome, email, resultadoHtml } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // vem do .env
        pass: process.env.EMAIL_PASS  // vem do .env
      }
    });

    await transporter.sendMail({
      from: `"DevCheck HouseJs" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Seu resultado DevCheck HouseJS",
      html: `
        <p>Olá, <b>${nome}</b>,</p>
        <p>Aqui está o seu resultado do seu quiz:</p>
        ${resultadoHtml} 
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
