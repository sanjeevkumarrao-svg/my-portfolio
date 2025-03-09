import React, { useState } from 'react';
import { Send, Loader2, Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Phone, text: '+91 7080234101', href: 'tel:+91 7080234101' },
    { icon: MapPin, text: 'Prayagraj, India', href: 'https://www.google.com/maps/@25.3947007,81.8681904,3a,75y,30.82h,108.46t/data=!3m7!1e1!3m5!1sYQLgnoFMFE_3nDPA6lv-7Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-18.45726824000903%26panoid%3DYQLgnoFMFE_3nDPA6lv-7Q%26yaw%3D30.82405736602654!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D' },
    { icon: Mail, text: 'sanjeevkumarrao12@gmail.com', href: 'mailto:sanjeevkumarrao12@gmail.com' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">{item.text}</span>
              </motion.a>
            ))}
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Quick Response
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              I typically respond within 24 hours during business days.
              For urgent matters, please call directly.
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-primary/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border bg-white/5 backdrop-blur-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border bg-white/5 backdrop-blur-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border bg-white/5 backdrop-blur-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg border bg-white/5 backdrop-blur-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          <div className="flex justify-end gap-4">
            <motion.button
              type="reset"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              Clear
            </motion.button>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};