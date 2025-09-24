import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://humancaretrainambulance.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === "success") {
        setStatus({ type: "success", message: result.message || "Message sent successfully!" });
        setFormData({ name: "", number: "", email: "", service: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600">
              For non-emergency inquiries, quotes, or questions, please use the
              form. For immediate medical emergencies, call our 24/7 dispatch
              line.
            </p>

            {/* Emergency */}
            <div className="flex items-center gap-4 bg-red-100 p-4 rounded-lg">
              <Phone className="h-6 w-6 text-red-600" />
              <div>
                <p className="text-gray-700 text-sm">Emergency 24/7</p>
 <a
                  href="tel:+919699999067"
                  className="font-semibold text-gray-900 hover:text-primary-red transition"
                >
                  +91 9699999067
                </a>               </div>
            </div>

            {/* Whatsapp Us */}
            <div className="flex items-center gap-4 bg-green-100 p-4 rounded-lg">
              <FaWhatsapp className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-gray-700 text-sm">Whatsapp Us</p>
                <a
                  href="https://wa.me/919699999065"
                  className="font-semibold text-gray-900 hover:text-primary-red transition"
                >
                  +91 9699999065
                </a>              </div>
            </div>

            {/* General Inquiries */}
            <div className="flex items-center gap-4 bg-blue-100 p-4 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-gray-700 text-sm">General Inquiries</p>
                {/* <p className="font-semibold text-gray-900">info@humancare.com</p> */}
                 <a
                  href="mailto:ops.humancareworldwide.com"
                  className="font-semibold text-gray-900 hover:text-primary-red transition"
                >
              ops.humancareworldwide.com
                </a>  
              </div>
            </div>

            {/* Headquarters */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
              <MapPin className="h-6 w-6 text-gray-600" />
              <div>
                <p className="text-gray-700 text-sm">Headquarters</p>
                <p className="font-semibold text-gray-900">
                  G-30, Dheeraj Haritage, S. V. Road, Junction, Milan Subway,
                  Santacruz (West), Mumbai, Maharashtra 400054
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {status.message && (
              <p
                className={`mb-4 text-center font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {status.message}
              </p>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue"
              />

              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue bg-white"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="Private Air Ambulance">Private Air Ambulance</option>
                <option value="Commercial Air Ambulance">Commercial Air Ambulance</option>
                <option value="Rotary">Rotary</option>
                <option value="Others">Others</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-primary-blue hover:bg-blue-700 text-white py-3 text-lg rounded-lg transition-colors"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
