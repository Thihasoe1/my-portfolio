import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">
            Reach Out
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's build something together.
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Glowing background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-accent-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />

          <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-slate-700/50">
            <form className="space-y-8" onSubmit={onSubmit}>
              {/* Optional: Add a subject to clearly identify the email */}
              <input type="hidden" name="subject" value="New message from Portfolio!" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  required
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <div className="flex flex-col items-center pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-10 py-4 mb-4 bg-gradient-to-r from-brand-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {/* Result Message */}
                <span className={`text-sm font-medium ${result.includes("Successfully") ? "text-green-400" : "text-brand-300"}`}>
                  {result}
                </span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;