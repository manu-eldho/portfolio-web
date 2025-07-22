"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/lib/schemas";
import { contactFormSchema } from "@/lib/schemas";
import { submitContactFormAction } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState, useTransition } from "react";

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setFormSubmitted(false);
    startTransition(async () => {
      const result = await submitContactFormAction(data);
      if (result.success) {
        setFormSubmitted(true);
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description:
            "There was a problem with your submission. Please check the form and try again.",
        });
      }
    });
  }

  if (formSubmitted) {
    return (
      <div className="text-center p-8 bg-accent/20 rounded-lg border border-accent">
        <h3 className="font-headline text-2xl text-primary">Thank You!</h3>
        <p className="text-muted-foreground mt-2">
          Your message has been sent successfully. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  {...field}
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
