export interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  budget?: string;
  location?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

const APPSCRIPT_URL = process.env.NEXT_PUBLIC_APPSCRIPT_URL || "";

export async function submitContactForm(data: FormData): Promise<ApiResponse> {
  if (!APPSCRIPT_URL) {
    console.warn("AppScript URL not configured. Logging form data:", data);
    return { success: true, message: "Form submitted (dev mode)" };
  }

  try {
    const response = await fetch(APPSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...data, timestamp: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Failed to send. Please WhatsApp us directly." };
  }
}

export async function submitQuoteForm(data: FormData): Promise<ApiResponse> {
  if (!APPSCRIPT_URL) {
    return { success: true, message: "Quote request submitted (dev mode)" };
  }

  try {
    const response = await fetch(APPSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "quote", ...data, timestamp: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    return { success: true, message: "Quote request sent! We'll contact you within 24 hours." };
  } catch (error) {
    console.error("Quote form error:", error);
    return { success: false, message: "Failed to send. Please WhatsApp us directly." };
  }
}

export async function submitNewsletterForm(email: string): Promise<ApiResponse> {
  if (!APPSCRIPT_URL) {
    return { success: true, message: "Subscribed (dev mode)" };
  }

  try {
    const response = await fetch(APPSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", email, timestamp: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    console.error("Newsletter form error:", error);
    return { success: false, message: "Failed to subscribe. Please try again." };
  }
}
