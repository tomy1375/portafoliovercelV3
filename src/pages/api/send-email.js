import { Resend } from 'resend';

export async function post({ request }) {
  const resend = "re_BuLeMtYd_6Tuyo4PwrxmMhXdcJK8Rumxy"
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL,
      to: "tomy_ramos1991@yahoo.com.ar", // Cambia esto si quieres enviar a un correo diferente
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
