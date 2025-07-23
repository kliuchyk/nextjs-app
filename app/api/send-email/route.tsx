import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...@codewithme.com",
    to: "devfoobar123@gmail.com",
    subject: "Welcome to CodeWithMe",
    react: <WelcomeTemplate name="John" />,
  });

  return NextResponse.json(
    { message: "Email sent successfully" },
    {
      status: 200,
    }
  );
}
