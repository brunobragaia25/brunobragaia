import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, projectType, budget, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: "bruninhugood@gmail.com",
      subject: `Novo orçamento de ${name}`,
      html: `
        <h2>Novo pedido de orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "—"}</p>
        <p><strong>Tipo de projeto:</strong> ${projectType || "—"}</p>
        <p><strong>Orçamento estimado:</strong> ${budget || "—"}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
  }
}
