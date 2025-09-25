import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Star, Phone, Plane, Globe, Plus, Minus, Send, Mail, MapPin, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: Plane,
      title: 'Private Air Ambulance',
      description: 'Dedicated, fully-equipped aircraft for urgent, long-distance patient transport with a specialized medical team.',
      link: '/services/private-air-ambulance'
    },
    {
      icon: Globe,
      title: 'Commercial Air Ambulance',
      description: 'A cost-effective solution for medically stable patients, with a medical escort on a commercial flight.',
      link: '/services/commercial-air-ambulance'
    },
    {
 icon: Globe,
       title: 'Rotary Wings (Helicopter)',
      description: 'Rapid, point-to-point transport for critical emergencies, ideal for short distances and remote areas.',
      link: '/services/rotary-wings'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York',
      rating: 5,
      text: 'HumanCare saved my father\'s life. Their quick response and professional medical team made all the difference during our emergency.'
    },
    {
      name: 'Michael Chen',
      location: 'California',
      rating: 5,
      text: 'Exceptional service during a very difficult time. The medical staff was compassionate and highly skilled throughout the entire journey.'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Texas',
      rating: 5,
      text: 'Professional, caring, and efficient. HumanCare exceeded our expectations in every way. Highly recommended for medical transport.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Lives Saved' },
    { number: '24/7', label: 'Emergency Response' },
    { number: '50+', label: 'Medical Specialists' },
    { number: '99.9%', label: 'Success Rate' }
  ];

  const faqs = [
    {
      question: "What is an air ambulance?",
      answer: "An air ambulance is a specially equipped aircraft, either a helicopter or a fixed-wing plane, used to transport injured or sick people in a medical emergency or over long distances. They are staffed with medical professionals and function like a mobile intensive care unit."
    },
    {
      question: "When should I consider an air ambulance?",
      answer: "You should consider an air ambulance for time-sensitive medical emergencies, when a patient needs to be transported over a long distance, or when ground transport is not feasible due to terrain or traffic. It's crucial for patients requiring specialized medical care during transit."
    },
    {
      question: "How much does an air ambulance service cost?",
      answer: "The cost varies widely based on factors like the type of aircraft, distance of transport, medical team required, and the patient's condition. We provide a detailed, transparent quote after assessing your specific needs. Contact us for a personalized estimate."
    },
    {
      question: "Is HumanCare accredited?",
      answer: "Yes, HumanCare is fully accredited by the Commission on Accreditation of Medical Transport Systems (CAMTS), which is the gold standard in the air ambulance industry. This ensures we meet the highest standards of safety and patient care."
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Emergency Call',
      description: 'Contact our 24/7 dispatch center. Our medical coordinators will gather critical information.'
    },
    {
      number: '02',
      title: 'Medical Assessment',
      description: 'Our medical team reviews the patient\'s condition to determine the appropriate level of care and aircraft.'
    },
    {
      number: '03',
      title: 'Dispatch & Transport',
      description: 'The flight and medical crew are dispatched. We provide seamless bed-to-bed care until arrival.'
    },
    {
      number: '04',
      title: 'Safe Arrival',
      description: 'Upon arrival, we ensure a smooth handover to the receiving medical facility.'
    }
  ];

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('homePageContact', JSON.stringify(formData));
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Mumbai, India: Human Care Air Ambulance & Medical Services</title>
        <meta name="description" content="Human Care Air Ambulance in Mumbai, India, offers top-notch air ambulance and medical services. Reliable 24/7 medical transport and expert healthcare solutions. Contact us for immediate assistance." />
        <meta name="keywords" content="air ambulance, medical transport, emergency services, ground ambulance, medical escort, international transfer" />
        <meta property="og:title" content="Best Medical Air Ambulance Services in India" />
        <meta property="og:description" content="Human Care Air Ambulance is the leading Air Ambulance service provider in India. Our core specialties are commercial flight ambulance, Charter Flight ambulance ,medical escort service, and more. Call now!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Humancare Air Ambulance",
    "description": "Professional medical transport services including air ambulance, ground ambulance, and international medical transfers",
    "telephone": "+919699999065",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G-30 Dhiraj Heritage, Santacruz, Mumbai",
      "addressLocality": "Mumbai",
      "addressCountry": "India"
    },
    "availableService": [
      {
        "@type": "Service",
        "name": "Private Air Ambulance"
      },
      {
        "@type": "Service",
        "name": "Commercial Air Ambulance"
      },
      {
        "@type": "Service",
        "name": "Rotary Wing Services"
      }
    ]
  })}
</script>

      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img class="w-full h-full object-cover opacity-20" alt="Abstract background of a medical helicopter interior" src="https://images.unsplash.com/photo-1696243144337-cb0532507e9a" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow">
              Professional Medical satish
              <br />
              <span className="text-300">Transport Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
              When every second counts, trust HumanCare for rapid, professional medical transport. 
              Our experienced team provides compassionate care during critical moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="cta-button text-white px-8 py-7 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <Link to="/contact">
                  Get Emergency Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <a
                href="tel: +919699999067"
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-white/30 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Call Now: +91 9699999067</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Air Ambulance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized air medical solutions for every critical situation, ensuring rapid and safe transport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-blue/10 rounded-full transition-transform duration-500 group-hover:scale-[10]"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-primary-blue text-white`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 ">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow ">{service.description}</p>
                  <Link to={service.link} className="mt-6 font-semibold text-primary-blue flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compassionate Care in the Skies
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                For over 15 years, HumanCare has been a beacon of hope, providing world-class medical transport with a human touch. Our mission is simple: to save lives and deliver peace of mind when it matters most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bed-to-Bed Service</h3>
                    <p className="text-gray-600">We manage every detail of the transport, from the sending hospital to the receiving facility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Our international network ensures you can get the care you need, wherever you are.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 bg-primary-blue hover:bg-primary-red text-white px-8 py-3">
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
               <div className="flex justify-center items-center">

<img class="w-[500px] h-[500px] object-cover rounded-xl shadow-healthcare" alt="A compassionate nurse holding a patient's hand in a medical jet" src="https://images.unsplash.com/photo-1615561776627-449e68725b57" />
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Life-Saving Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, 4-step process designed for speed, safety, and seamless care.
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative text-center bg-gray-50 p-4"
                >
                  <div className="flex items-center justify-center">
                    <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-white border-4 border-primary-blue rounded-full text-primary-blue text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img class="w-full h-auto object-cover rounded-xl shadow-healthcare" alt="Medical team preparing patient for transport" src="https://images.unsplash.com/photo-1692967489040-07cdf6a859b9" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Fleet & Team
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge technology with compassionate care to ensure the best possible outcomes for our patients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Medical Team</h3>
                    <p className="text-gray-600">Highly trained paramedics, nurses, and doctors with specialized transport experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-red p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
                    <p className="text-gray-600">Our logistics team ensures the fastest possible response time for every mission.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                    <p className="text-gray-600">Patient-centered approach with emotional support for families during difficult times.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from families who trusted us during their most critical moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="testimonial-card bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Answers to common questions about our air ambulance services.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-1"
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  {openFaq === index ? <Minus className="h-6 w-6 text-primary-blue" /> : <Plus className="h-6 w-6 text-gray-500" />}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      <ContactForm />
    </>
  );
};

export default Home;