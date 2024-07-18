"use server";
import { validateString } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("email");
  const message = formData.get("message");

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(sender, 5000)) {
    return {
      error: "Invalid email",
    };
  }

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "princesunasara@gmail.com",
    subject: "Mail from Portfolio",
    // reply_to: sender as string,
    text: message as string,
  });

  //   if (error) {
  //     return res.status(400).json(error);
  //   }

  //   res.status(200).json(data);
};
