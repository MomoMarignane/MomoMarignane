import { motion } from "framer-motion";
import { useState, useRef, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
// Vérifier si EmailJS est correctement importé
console.log("EmailJS importé:", emailjs);

export default function ContactSection() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      console.log("Initializing EmailJS...");
      emailjs.init("AGjzuJSUnDlUnWeG5");
      console.log("EmailJS initialized successfully!");
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center text-white"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 rounded-xl"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">mohamed.mansour@epitech.eu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">
                      Currently in Marseille
                    </p>
                    <p className="text-white">France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Availability</p>
                    <p className="text-white">
                      Available for part-time internship from 09/15/2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <SocialLink 
                    href="https://www.linkedin.com/in/mansour3w/" 
                    gradient="from-blue-500 to-cyan-500" 
                    hoverGradient="from-blue-600 to-cyan-600" 
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://github.com/MomoMarignane?" 
                    gradient="from-gray-900 to-gray-700" 
                    hoverGradient="from-black to-gray-800" 
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                      style={{ filter: "drop-shadow(0 0 2px #fff)" }}
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://www.instagram.com/dev_life_passion" 
                    gradient="from-pink-500 to-purple-500" 
                    hoverGradient="from-pink-600 to-purple-600" 
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.853.04 1.125.05 3.297.05s2.444-.01 3.298-.05c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942.04-.853.05-1.125.05-3.297s-.01-2.444-.05-3.297c-.04-.851-.175-1.433-.372-1.942a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-1 rounded-xl"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Message
              </h3>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  gradient: string;
  hoverGradient: string;
  children: React.ReactNode;
}

function SocialLink({ href, gradient, hoverGradient, children }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center hover:${hoverGradient} transition-colors`}
    >
      {children}
    </motion.a>
  );
}

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Récupération des clés EmailJS depuis les variables d'environnement
  // https://www.emailjs.com/
  const SERVICE_ID = "service_ka9l4cp";
  const TEMPLATE_ID = "template_fripr4u";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "AGjzuJSUnDlUnWeG5";
  
  // La destination finale sera mohamed.mansour@epitech.eu
  // configurée dans votre modèle EmailJS

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setSubmitStatus({
        success: false, 
        message: "Please fill in all fields."
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      console.log("Tentative d'envoi d'email avec EmailJS...");
      
      // Préparation des paramètres EmailJS (format simplifié)
      const templateParams = {
        title: "Portfolio Contact",
        from_name: name,
        from_email: email,
        message: message,
      };

      console.log("Paramètres:", templateParams);
      
      // Tentative 1 : Utiliser directement emailjs.send comme dans votre exemple
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          
          // Réinitialiser le formulaire après succès
          setName("");
          setEmail("");
          setMessage("");
          setSubmitStatus({
            success: true,
            message: "Your message has been sent successfully! I'll get back to you as soon as possible."
          });
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setSubmitStatus({
            success: false,
            message: "Failed to send your message. Error: " + err.text
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
      
      // Note: nous utilisons la promesse directement, donc pas besoin de 'finally' ici
      
    } catch (error) {
      console.error("Erreur générale:", error);
      setSubmitStatus({
        success: false,
        message: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard."
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      {/* Afficher le message de statut */}
      {submitStatus && (
        <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`}>
          {submitStatus.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-900/10 border border-blue-500/30 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-900/10 border border-blue-500/30 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-900/10 border border-blue-500/30 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-600'} transition-all transform focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            Sending...
          </div>
        ) : "Send Message"}
      </motion.button>
    </form>
  );
}
