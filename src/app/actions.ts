"use server";

import { z } from "zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

export async function submitContactFormAction(data: ContactFormData) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.flatten() };
  }

  // In a real application, you would send an email here.
  // For example, using a service like Resend or Nodemailer.
  console.log("Form submitted successfully:", result.data);

  return { success: true, data: result.data };
}
