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

const API_ENDPOINT = "/api/contact";

export async function submitContactForm(data: FormData): Promise<ApiResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...data, timestamp: new Date().toISOString() }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Network response was not ok");
    
    return { success: true, message: "Message sent! We'll contact you within 24 hours." };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Failed to send. Please WhatsApp us directly." };
  }
}

export async function submitQuoteForm(data: FormData): Promise<ApiResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "quote", ...data, timestamp: new Date().toISOString() }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Network response was not ok");
    
    return { success: true, message: "Quote request sent! Redirecting to WhatsApp..." };
  } catch (error) {
    console.error("Quote form error:", error);
    return { success: false, message: "Failed to send. Opening WhatsApp anyway." };
  }
}

export async function submitNewsletterForm(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", email, timestamp: new Date().toISOString() }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Network response was not ok");
    
    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    console.error("Newsletter form error:", error);
    return { success: false, message: "Failed to subscribe. Please try again." };
  }
}
