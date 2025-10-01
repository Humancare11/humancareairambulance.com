import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Shield, Heart, Clock, CheckCircle, Phone, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/button';
import PageBanner from '../../components/PageBanner';
import ContactForm from '../../components/ContactForm';
import CommercialAirAmbulances from '../../assets/CommercialAirAmbulance.png'
import CommercialAirAmbulanceServices from '../../assets/CommercialAirAbulanceservices.png'



const CommercialAirAmbulance= () => {
  const [openFaq, setOpenFaq] = useState(null); // 👈 add state

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    { icon: Shield, title: 'ICU-Level Care', description: 'Our aircraft serve as flying ICUs, fully equipped with advanced medical technology for critical patient care.' },
    { icon: Heart, title: 'Specialized Medical Team', description: 'Every patient is accompanied by a dedicated team of flight physicians, nurses, and paramedics.' },
    { icon: Clock, title: 'Rapid Deployment', description: 'We can take off within hours of your call, providing rapid and timely transport for critical patients.' },
    { icon: Plane, title: 'Bed-to-Bed Service', description: 'We handle the complete transfer, from the patient’s bedside at the sending facility to arrival at the receiving hospital.' },
  ];

  const faqs = [
    { question: "What is an air ambulance?", answer: "An air ambulance is a specially equipped aircraft or helicopter designed to provide urgent Air Ambulance Services. Functioning as a flying ICU, it includes advanced medical equipment and a trained team of doctors, nurses, and paramedics to ensure safe, continuous care during emergency, long-distance, or international transfers. We provide transparent Air Ambulance Cost with every service to ensure clarity and peace of mind." },
    { question: "When should I consider an air ambulance?", answer: "Consider an air ambulance for time-sensitive medical situations where rapid transport is critical. This includes severe injuries, life-threatening illnesses, or patients needing continuous ICU-level care during long-distance or international transfers. Air ambulances ensure fast, safe, and closely monitored medical transport." },
    { question: "How much does an air ambulance service cost?", answer: "Air ambulance cost depends on factors like distance, type of aircraft, level of medical care, and specialized equipment. Domestic transfers are generally less expensive than international repatriation, and services with ICU onboard or medical escorts may cost more. We provide transparent, customized quotes for every patient transfer." },
    { question: "Is HumanCare accredited?", answer: "Yes, HumanCare is fully accredited by CAMTS (Commission on Accreditation of Medical Transport Systems), ensuring the highest standards of safety, quality, and professional care in every air ambulance and medical transport service." }
  ];


  return (
    <>
      <Helmet>
        <title>commercial Air Ambulance Services | HumanCare</title>
        <meta name="description" content="Reliable Commercial Air Ambulance Services providing advanced care for urgent transfers. Transparent Air Ambulance Cost for safe, seamless patient transport." />
      </Helmet>

      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            commercial Air <span className="text-primary-red">Ambulance services</span>
          </h1>
        }
        subtitle="Our dedicated fixed-wing aircraft provide advanced Air Ambulance Services for urgent, long distance, and international patient transfers, with transparent Air Ambulance Cost for every journey."
      />


<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Content Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
Global Emergency Air Transfers
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We offer rapid-response air ambulance services for domestic and international patient transfers. Our expert medical team ensures continuous care from departure to arrival, coordinating with hospitals and ground ambulances worldwide.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>24/7 global coordination and dispatch</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Specialized emergency response team</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Seamless hospital-to-hospital transfers</span>
          </div>
        </div>
      </motion.div>

      {/* Image Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          className="w-full h-96 object-cover rounded-xl shadow-healthcare"
          alt="Air ambulance ready for global emergency transfers"
          src={CommercialAirAmbulances}
        />
      </motion.div>

    </div>
  </div>
</section>

      <section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      
      {/* Image Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          className="w-full h-96 object-cover rounded-xl shadow-healthcare"
          alt="Interior of a private air ambulance"
          src={CommercialAirAmbulanceServices}
        />
      </motion.div>

      {/* Content Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
Your Flying Intensive Care Unit        </h2>
        <p className="text-lg text-gray-600 mb-8">
 Our private air ambulance service uses state-of-the-art fixed-wing aircraft configured as mobile ICUs, providing continuous medical monitoring for critically ill or injured patients. Ideal for long-distance, inter-state, and international transfers, we ensure safe, seamless, and comfortable journeys.        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Advanced life support and monitoring equipment</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Specialized care for cardiac, trauma, and pediatric patients</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Global reach with full logistical and documentation support</span>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>


     

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features of Our Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="healthcare-card bg-white p-8 rounded-xl text-center"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
                  {openFaq === index ? (
                    <Minus className="h-6 w-6 text-primary-blue" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-500" />
                  )}
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

      <section className="section-padding bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
Arrange a Private Air Ambulance Transfer
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
Our 24/7 flight coordinators manage every detail of your medical transport, ensuring a safe, seamless, and timely transfer.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="cta-button text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Immediate Help
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg rounded-full">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default CommercialAirAmbulance;