import { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { highlights } from '../data/highlights';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: ''
    };

    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "I'd love to know who I'm talking to! What's your name?";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "How will I reach you? Please share your email address.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Hmm, that email doesn't look quite right. Mind double-checking?";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Don't be shy! I'd love to hear what's on your mind.";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-notification`;

      const notificationResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (!notificationResponse.ok) {
        console.warn('Discord notification failed, but message was saved');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFieldErrors({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's talk
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Whether you're hiring for a PM role, exploring a collaboration, or just want
          to talk product, I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in touch
            </h2>

            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${highlights.contact.email}`}
                className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-gray-900 font-medium">{highlights.contact.email}</div>
                </div>
              </a>

              <a
                href={highlights.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                  <div className="text-gray-900 font-medium">Connect on LinkedIn</div>
                </div>
              </a>

              <a
                href={`tel:${highlights.contact.phone}`}
                className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <div className="text-gray-900 font-medium">{highlights.contact.phone}</div>
                </div>
              </a>
            </div>

            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">Looking to hire?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                I'm open to Product Manager roles where I can work on complex problems,
                collaborate with talented teams, and deliver measurable impact. Feel free
                to reach out to discuss opportunities.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a message
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-200">
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                      fieldErrors.name
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                      fieldErrors.email
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${
                      fieldErrors.message
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                  />
                  {fieldErrors.message && (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
