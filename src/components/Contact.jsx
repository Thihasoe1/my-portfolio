import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// Phase C: visual restyle only. The Web3Forms form and its submit logic are
// unchanged until Phase D replaces this section with direct email contact.
const field =
  "w-full px-4 py-3.5 bg-surface text-ink placeholder:text-ink-subtle border-3 border-ink rounded-brutal-sm shadow-brutal-sm focus-visible:shadow-brutal-none";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Replace this with your Web3Forms Access Key
    // Get one for free at: https://web3forms.com/
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
    }

    setIsSubmitting(false);
  };

  const succeeded = result.includes("Successfully");

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28 bg-lime/40">
      <Container size="md">
        <SectionHeader
          id="contact-title"
          eyebrow="Contact"
          tone="surface"
          align="center"
          title="Let's build something together."
          description="Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        <Card padding="lg" shadow="lg">
          <form className="space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="subject" value="New message from Portfolio!" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-display font-bold">Your name</label>
                <input type="text" name="name" id="name" required autoComplete="name" className={field} placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-display font-bold">Your email</label>
                <input type="email" name="email" id="email" required autoComplete="email" className={field} placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-display font-bold">Message</label>
              <textarea rows="5" name="message" id="message" required className={`${field} resize-y`} placeholder="Hello, I'd like to talk about..." />
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
              <p role="status" aria-live="polite" className={`text-sm font-semibold ${succeeded ? "text-ink" : "text-ink-muted"}`}>
                {result}
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
