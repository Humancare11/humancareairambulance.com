import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'
import PageBanner from '../../components/PageBanner'
import { ArrowRight, Plane, Globe, CheckCircle, Plus, Minus, ClipboardPlus, Activity, ShieldEllipsis } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
function AirAmbulance() {
const [openFaq, setOpenFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
    const services = [
        {
            icon: ClipboardPlus,
            title: 'Specialist Doctors',
            description: 'All are ambulance comes with specialist team of doctors to give them proper care though out the journey.',

        },
        {
            icon: Activity,
            title: 'General Surgery',
            description: 'Latest Equipment and proper medicines availability which ensure the safety of patient.',

        },
        {
            icon: ShieldEllipsis,
            title: 'Affordable Caring',
            description: 'Yes, Human care air ambulance is affordable and premium medical care. We want to save as many lives we can that our mission.',

        }
    ];

    const stats = [
        { number: '10,000+', label: 'Lives Saved' },
        { number: '24/7', label: 'Emergency Response' },
        { number: '50+', label: 'Medical Specialists' },
        { number: '99.9%', label: 'Success Rate' },
    ];

  const faqs = [
    { question: "Why are air ambulances used?", answer: "Patients in life-threatening circumstances are transported rapidly using air ambulances. Air ambulances, like ordinary ground ambulances, are equipped with medical equipment and staffed by medical personnel. Typically, helicopters are used as air ambulances." },
    { question: "How much does air ambulance cost in India?", answer: "The cost of hiring an aircraft, incidental bed-to-bed transfer expenses, and the cost of deploying medical staff personnel are all elements that influence air ambulance prices. Depending on the flight distance, an air ambulance might cost anything from Rs 2.5 lakh to Rs 18 lakh each patient transport." },
    { question: "Is air ambulance available in India?", answer: "Air ambulance service in available in India in almost all major cities and airports. Human care Air Ambulance is the largest ambulance service in India. Where,  some are run by hospitals while some are run under government bodies. They provide end-to-end patient care for domestic and international air ambulance evacuations." },
    { question: "Are there doctors in an ambulance?", answer: "Air ambulance will generally consist of a crNew of three members. The crew usually consists of a pilot and two paramedics. There can also be a doctor, nurse, and physicians on the crew. Doctors are not a mandatory member. They usually join flights during free time when required." }
  ];

    return (
        
        <>

         <Helmet>
        <title>Air Ambulance Services - Mumbai, India - Medical Emergency</title>
        <meta name="description" content=" Get Medical Emergency and Non Emergency Air Ambulance Services Globally and Domestically at an affordable Cost." />
      </Helmet>
        
            <PageBanner
                titleComponent={
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        AIR <span className="text-primary-red">AMBULANCE</span>
                    </h1>
                }
                subtitle="Dedicated, fixed-wing aircraft providing the highest level of medical care for urgent, long-distance, and international patient transport."
            />

            {/* Content Section */}
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
                                We can’t stop mis-happenings, but we can always save lives by
                                taking them to hospitals on time. Though we have road ambulances,
                                they aren’t that fast to deliver the patients on time. When a patient
                                is in danger, every passing minute is a threat to their life, and that’s
                                why a fast option is required. Air ambulance services are the best
                                option in such cases because they are not only speedy but are also
                                unaffected by traffic.
                            </p>
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
                                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                            />
                        </motion.div>
                    </div>
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
                            Consistent in Patient Safety & Quality Measures
                        </h2>

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

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                className="w-full h-96 object-cover rounded-xl shadow-healthcare"
                                alt="Air ambulance ready for global emergency transfers"
                                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                            />
                        </motion.div>
                        {/* Content Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                We make it enjoyable to get care              </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We believe in dedicated services, and that’s why we are always with you whenever you need us. We don’t see day or night and Monday or Sunday, it’s our duty, and we do that in any phase of the day or the week. Our 24×7 air ambulance service in India makes sure that no call is left unattended so that we can help you in the most critical situations. Call us whenever you need our services, and we will be right there in no time. Even if you don’t have our contact saved in your phone, you can have that from our website. You can know the air ambulance price by calling us.
                            </p>

                        </motion.div>



                    </div>
                </div>
            </section>
            {/* Content Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid  gap-12 items-center">
                        {/* Content Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
Reliable and Affordable Air Ambulance Services You Can Trust                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-8">
                             Our Air Ambulance service is all that you need in a critical situation. Our air ambulances are not only equipped with all the life support systems but also have a complete team of professionals to monitor the situation on the way to the hospital. Human Care Air Ambulance services connect you to the farthest places in no time, and the best thing is our services are spread in multiple cities, making it possible for you to reach on time and come back comfortably. Patients are the priority, and that’s why we make everything more comfortable for you. We not only take care of high clinical standards in the air ambulance but also make sure that the patient has all the comforts. The core focus is on providing hassle-free, and safe patient transportation services in the city. You can believe what we say because this is all based on people’s experiences with us. Air ambulance is undoubtedly expensive. Since it comes with a lot of benefits especially in an emergency, we tend to go for it for the sake of our loved ones lives. We know the pain of losing someone because of a lack of money, and that’s why we try to make the services as affordable as possible without compromising over quality.

The dedication of our team towards their work can be easily understood by the efforts they do to be on time and delivering the patients on time. So, whenever you need an air ambulance service call us. We are just a ring away from you.
                            </p>
                        </motion.div>

                       
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
        <ContactForm />
        </>

    )
}

export default AirAmbulance
