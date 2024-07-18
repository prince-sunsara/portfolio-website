"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

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

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.com>",
      to: "princesunasara977@gmail.com",
      subject: "Message from Portfolio",
      reply_to: sender as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        sender: sender as string,
      }),
    });

    return {
      data,
      error: getErrorMessage(error),
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
