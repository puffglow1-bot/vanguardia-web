import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Configuración de rutas para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

// AÑADE ESTA LÍNEA AQUÍ: Le dice a Express que confíe en Render
app.set('trust proxy', 1);

// IMPORTANTE PARA CLOUD RUN:
// Cloud Run inyecta la variable PORT, que por defecto suele ser 8080.
const PORT = process.env.PORT || 8080;

// 1. Middleware de Seguridad y Utilidades
app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(cors({
  origin: [
    'http://localhost:5173', // Para cuando programas en tu ordenador
    'http://localhost:3000', // Por si acaso
    'https://vanguardia-web.onrender.com' // La URL real de tu web en internet
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.set('trust proxy', 1);

// 2. Configuración del Transporte de Email (GMAIL)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Coordenada exacta del servidor de salida de Google
  port: 587, // Puerto cifrado y seguro
  secure: false, // Obligamos a usar la conexión segura
  auth: {
    user: process.env.GMAIL_USER, // ¡Mantenemos tus nombres de variables!
    pass: process.env.GMAIL_PASS, // ¡Mantenemos tus nombres de variables!
  },
  tls: {
    // El "pase VIP" para que Render no bloquee la conexión por temas de certificados
    rejectUnauthorized: false
  }
});


// Verificación de conexión SMTP al arrancar
transporter.verify(function (error, success) {
  if (error) {
    console.warn("⚠️ Error conectando con Gmail:", error);
  } else {
    console.log("✅ Gmail listo para enviar correos.");
  }
});

// 3. Rate Limiting (5 emails/hora por IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5, 
  standardHeaders: true,
  legacyHeaders: false,
  message: { 
    success: false, 
    message: "Límite de envíos excedido. Intenta más tarde." 
  }
});

// 4. API Endpoints
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message, honeypot } = req.body;

  if (honeypot) return res.status(200).json({ success: true, message: "Recibido." });

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Faltan datos." });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Remitente autenticado
      to: process.env.MY_EMAIL_DESTINATION, // Destinatario final
      replyTo: email, // Al responder en Gmail, le responderás al usuario
      subject: `[Web] ${subject} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ccc;">
          <h2>Nuevo Mensaje de Contacto</h2>
          <p><strong>De:</strong> ${name} (${email})</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr/>
          <p>${message}</p>
        </div>
      `,
      text: `De: ${name} (${email})\nMensaje: ${message}`
    });

    return res.status(200).json({ success: true, message: "Mensaje enviado." });
  } catch (error) {
    console.error("Error envío:", error);
    return res.status(500).json({ success: false, message: "Error del servidor." });
  }
});

// 5. Servir Frontend (Archivos estáticos)
app.use(express.static(path.join(__dirname, 'dist')));

// 6. SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});