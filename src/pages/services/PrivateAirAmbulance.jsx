import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Shield, Heart, Clock, CheckCircle, Phone, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/button';
import PageBanner from '../../components/PageBanner';
import ContactForm from '../../components/ContactForm';
import PrivateAirambulances from '../../assets/PrivateAirambulance.jpg'
import PrivateAirambulanceIcu from '../../assets/PrivateAirambulanceIcu.jpg'


const PrivateAirAmbulance = () => {
  const [openFaq, setOpenFaq] = useState(null); // 👈 add state

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    { icon: Shield, title: 'ICU-Level Care', description: 'Our aircraft function as flying ICUs, fully equipped with advanced medical technology.' },
    { icon: Heart, title: 'Specialized Medical Team', description: 'Each patient is supported by a specialized team of flight physicians, nurses, and paramedics.' },
    { icon: Clock, title: 'Rapid Deployment', description: 'Within hours of your call, we are airborne delivering fast and timely transport for critical cases.' },
    { icon: Plane, title: 'Bed-to-Bed Service', description: 'We handle everything from the patient’s bedside at the sending facility to arrival at the receiving hospital.' },
  ];

  const faqs = [
    { question: "What is an Air Ambulance?", answer: "An air ambulance in India is a specially equipped aircraft or helicopter designed for patients requiring urgent medical care. These air ambulance services function as flying intensive care units, equipped with advanced medical technology, critical care facilities, and a team of doctors, nurses, and paramedics onboard. They are used for emergency medical evacuations, long-distance transfers, and international patient repatriation, with clear and transparent air ambulance cost options" },
    { question: "When Should I Consider an Air Ambulance?", answer: "You should consider air ambulance services for time-sensitive medical situations where rapid transport is critical. This includes severe injuries, life-threatening illnesses, or patients requiring continuous ICU-level care during long-distance or international transfers. Air ambulance services ensure quick, safe, and well-monitored medical transport when every minute counts." },
    { question: "How Much Does an Air Ambulance Cost?", answer: "The air ambulance cost depends on factors such as distance, type of aircraft, medical equipment, and level of care. Our air ambulance services in India cover both domestic and international transfers, with domestic transfers generally costing less than international repatriation. Specialized ICU equipment or medical escorts may affect pricing, and we provide transparent, customized quotes for every patient transfer." },
    { question: "Is HumanCare accredited?", answer: "Yes, HumanCare is fully accredited by CAMTS (Commission on Accreditation of Medical Transport Systems), ensuring the highest standards of safety, quality, and professional care in every air ambulance and medical transport service we provide" }
  ];


  return (
    <>
      <Helmet>
        <title>Private Air Ambulance Services | HumanCare</title>
        <meta name="description" content="Get fast, safe, and reliable Air Ambulance Services with expert care. Transparent Air ambulance cost for seamless patient transfers worldwide." />
      </Helmet>

      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Private Air <span className="text-primary-red">Ambulance Services</span>
          </h1>
        }
        subtitle="Fast, safe, and reliable air ambulance service with dedicated fixed-wing aircraft and advanced medical care for urgent, long-distance, and international patient transport."
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
 Get rapid-response air ambulance services for international and domestic patient transfers. Our expert medical team ensures continuous care from takeoff to landing, with full coordination between hospitals and ground ambulances worldwide. Available 24/7 for seamless hospital-to-hospital transfers.   </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Global Emergency Air Transfers</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>Air Ambulance Services</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span>International & Domestic Transfers</span>
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
          src={PrivateAirambulanceIcu}
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
          src={PrivateAirambulances}
        />
      </motion.div>

      {/* Content Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
Your Flying ICU
        </h2>
        <p className="text-lg text-gray-600 mb-8">
Our air ambulance services in India provide fixed-wing aircraft equipped as mobile ICUs, ensuring safe critical care air transfers for patients needing emergency evacuation, medical repatriation, or hospital-to-hospital transport. Available 24/7, with expert doctors, ICU onboard aircraft, and global reach for both domestic and international patient transfers.       </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features of Our Air Ambulance Service</h2>
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
Arrange a Private Air Ambulance Transfer            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
 Our 24/7 flight coordinators handle every detail of your medical transport, ensuring a safe, seamless, and timely transfer.            </p>
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

export default PrivateAirAmbulance;