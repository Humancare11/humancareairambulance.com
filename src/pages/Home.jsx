import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Star, Phone, Plane, Globe, Plus, Minus, Send, Mail, MapPin, Heart, CheckCircle, PlaneTakeoff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import ContactForm from '../components/ContactForm';
import HeroImg from '../assets/AirAmbulanceServices.jpg';
import AirAmbulances from '../assets/AirAmbulances.jpg'


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
 icon: PlaneTakeoff,
       title: 'Rotary Wings (Helicopter)',
      description: 'Rapid, point-to-point transport for critical emergencies, ideal for short distances and remote areas.',
      link: '/services/rotary-wings'
    }
  ];

  const testimonials = [
    {
      name: 'Ramesh Gupta',
      location: ' Jaipur, India',
      rating: 5,
      text: 'Thanks to HumanCare, my father received life-saving care. Their rapid response and skilled medical team ensured everything went smoothly during a critical emergency.'
    },
    {
      name: 'Anita Sharma',
      location: ' Jaipur, India',
      rating: 5,
      text: 'Truly outstanding support during a challenging time. The medical team was professional, caring, and ensured every step of the journey was smooth'
    },
    {
      name: 'Vikram Singh',
      location: 'Bengaluru, India',
      rating: 5,
      text: 'HumanCare provided professional, compassionate, and efficient service. They went above and beyond in every aspect of the medical transport. Highly recommended!'
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
      answer: "An air ambulance is a specially outfitted aircraft, either a fixed-wing or helicopter, intended for quick and safe medical patient transport during emergency services or long-distance international transfers. With a dedicated medical escort and smooth ground ambulance support from pickup to hospital, it operates as a mobile intensive care unit (ICU) manned by qualified physicians, nurses, and paramedics."
    },
    {
      question: "When Is an Air Ambulance a Good Option?",
      answer: "In emergency situations where every minute matters, for long-distance medical transport, or when ground ambulance travel is impractical because of traffic, terrain, or other limitations, you should choose an air ambulance. It's perfect for patients who require ongoing observation, intensive care unit treatment, or a qualified medical escort while in transit, including when transferring internationally."
    },
    {
      question: "What Is the Price of an Air Ambulance Service?",
      answer: "The type of aircraft, distance, emergency services level, intensive care unit needs, and the requirement for a medical escort are some of the variables that affect the cost of an air ambulance. After evaluating your patient's unique needs, we provide an open, customized quote for both domestic and international medical transport. For a precise estimate, get in touch with us at any time."
    },
    {
      question: "Does HumanCare Have an Accreditation?",
      answer: "The Commission on Accreditation of Medical Transport Systems (CAMTS), the premier organization for air ambulance and medical transport services, has granted HumanCare full accreditation. This guarantees that every mission, be it international transfer, ground ambulance connection, or emergency services, satisfies the highest standards of professionalism, safety, and care."
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Emergency Call',
      description: 'Contact our dispatch center at any time. In order to schedule air ambulance and medical transport services in a timely manner, our coordinators gather essential information.'
    },
    {
      number: '02',
      title: 'Medical Evaluation',
      description: 'To ascertain the degree of care, ICU configuration, and any medical escort requirements for a safe trip, our skilled medical staff assesses the patient.'
    },
    {
      number: '03',
      title: 'Transport & Dispatch',
      description: 'Complete emergency services are provided by the air ambulance crew. Whether the transfer is domestic or international, we guarantee smooth bed-to-bed medical transport and ground ambulance connectivity.'
    },
    {
      number: '04',
      title: 'Arrival Safety',
      description: 'We ensure a safe and comfortable medical transfer by transferring the patient to the receiving facility with full continuity of care upon arrival.'
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
          {/* <img class="w-full h-full object-cover opacity-20" alt="Abstract background of a medical helicopter interior" src="https://images.unsplash.com/photo-1696243144337-cb0532507e9a" /> */}
        
        <img
      className="w-full h-full object-cover opacity-20"
      alt="Abstract background of a medical helicopter interior"
      src={HeroImg}
    /></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow">
Air Ambulance Services &              <br />
              <span className="text-300">Global Medical Transport - Humancare </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
              Air ambulance services by Human Care Air Ambulance deliver safe, reliable, and 24/7 medical transport. With ICU-equipped aircraft and skilled medical teams, we ensure seamless patient transfers with care and expertise.
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
Air Ambulance Services We Provide            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
For every emergency, we offer specialized air ambulance services. Using intensive care units (ICUs), skilled physicians, ground ambulance support, and committed medical escort care, our team guarantees safe and dependable medical transport for everything from emergency services and critical care to international transfers.            </p>
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
Caring for Others in the Air
              </h2>
              <p className="text-lg text-gray-600 mb-8">
Humancare has been a reputable name in air ambulance and medical transport for more than 15 years, providing top-notch care with a personal touch. Our goal is straightforward: to deliver dependable emergency services when it counts most, save lives, and give people peace of mind.s              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bed-to-Bed Assistance</h3>
                    <p className="text-gray-600">Every trip is smooth. We manage every stage with accuracy, from ground ambulance pickup at the sending hospital to a safe arrival at the receiving facility. We guarantee continuity of care whether a patient needs an onboard intensive care unit or a qualified medical escort.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Care is never hindered by distance. Our medical repatriation and international transfer services link patients to hospitals worldwide through a vast network, providing quick, safe, and caring transportation whenever and wherever it's required.</p>
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

<img class="w-[500px] h-[500px] object-cover rounded-xl shadow-healthcare" alt="A compassionate nurse holding a patient's hand in a medical jet" src={AirAmbulances}/>
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
Our Method for Preserving Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
From the initial call to the final handover, a four-step process that includes emergency services, ground ambulance support, medical escort, and a seamless international transfer guarantees that every air ambulance mission is safe, quick, and seamless.            </p>
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
Modern Fleet & Staff
              </h2>
              <p className="text-lg text-gray-600 mb-8">
Whether for emergency services, ground ambulance connections, or international transfers, our state-of-the-art air ambulance fleet and equipment, along with our skilled medical transport capabilities, guarantee safe and effective patient transfers.              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Team with Certification
</h3>
                    <p className="text-gray-600">Specialized medical escort and in-flight intensive care unit care is provided by highly qualified physicians, nurses, and paramedics who combine clinical expertise with compassion.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-red p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Reaction
</h3>
                    <p className="text-gray-600">Critical medical transport is dependable and timely because our logistics and coordination team guarantees the quickest response for each air ambulance mission.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Caring for Others
</h3>
                    <p className="text-gray-600">At every stage of emergency services and international transfer journeys, we put patients and their families first by providing emotional support and a patient-centered approach.</p>
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