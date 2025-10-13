import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'
import PageBanner from '../../components/PageBanner'
import { ArrowRight, Plane, Globe, CheckCircle, Plus, Minus, ClipboardPlus, Activity, ShieldEllipsis } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
function GroundAmbulance() {
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
        { number: '50+', label: 'Doctor' },
        { number: '50+', label: 'No of Fleets' },
        { number: '3000+', label: 'Happy Patients' },
        { number: '100%', label: 'Global Affiliation' },
    ];

  const faqs = [
    { question: "What is a ground ambulance?", answer: "A ground ambulance is a vehicle that is equipped, maintained, and properly authorized to carry patients by road to their destinations, such as hospitals with resources. Ambulances used to transport traumatized or medical patients are known as land ambulances. They are run by hospitals and charitable agencies." },
    { question: "What are the types of ambulances?", answer: "Type I is used for Advanced Life Support and has a square patient compartment. Basic Life Support elements are included in Type II ambulances, which are built on a van chassis. Type III is similar to Type I, but differs in the type of chassis. Type IV is a mini ambulance that can be used to get to inaccessible terrains." },
    { question: "How is an ambulance ride billed?", answer: "Ambulance ride is billed according to the distance covered, equipment used and the general rate for the respective type of the ambulance. Insurance companies may pay-off part of the amount if you have one. Since not all ambulance services are government-funded, the price can vary." },
    { question: "What are the types of ambulance?", answer: "Basic life support ambulances are used to transport non-life threatening diseases or injuries to a hospital where they can get complete medical care. Advanced Life Support Ambulances are equipped with advanced equipment to deal with life-threatening situations. Patients are transported between medical centres and non-urgent care is provided by a Patient Transport Vehicle." }
  ];

    return (
        
        <>

         <Helmet>
        <title>Ground Ambulance Service | Medical Transportation - Mumbai, India: Human Care Air Ambulance</title>
        <meta name="description" content=" 
Human Care is 24*7 available for urgent medical transportation. We provide the best ground ambulance service with every medication and life support equipment." />
      </Helmet>
        
            <PageBanner
                titleComponent={
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        GROUND  <span className="text-primary-red">AMBULANCE</span>
                    </h1>
                }
                subtitle="BEST Ground ambulance SERVICE in india"
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
Reliable Ground and Air Ambulance Services at Affordable Rates                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Human Care Cardiac and Air Ambulance Services are always there for transferring serious patients to their destinations within a short time at an inexpensive rate. Our Ground Ambulance services facilitate every emergency & critical concern. According to the patients’ requirements, we always charge the affordable and economical transportation fee with 24×7 service availability across the country and worldwide.

Experienced and advanced medical dispatchers for our Ground Ambulance services.
High-accommodated and well-equipped with CCU, MICU, and ICU equipment in the Ground Ambulance transfer process.
Round-the-clock & throughout the year the same response be it in the midnight or daytime.
Responsible, fast, and quick services available along with reasonable charges.
Quality, transparent, hygienic, and experienced personnel is what matters to us in terms of transferring patients from 1 place to another.
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
            {/* Services Section
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
                </div>s
            </section> */}

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
                               We make it enjoyable to get care
            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                               Our Ground Ambulance services include small-sized and full-sized ambulance vehicles with every medication and life support equipment. This includes pulse oximeters, cardiac monitors, defibmonitors, multi-parameter monitors, suction machines, ventilators, pacemakers, nebulizers, oxygen, BiPAP, as well as emergency medicines.
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
Comprehensive and Affordable Ground Ambulance Services                         </h2>
                            <p className="text-center text-lg text-gray-600 mb-8">
                            Not only our services are economical, but they also come as a boon to those patients who can’t fly due to the medical issues or can’t afford the air ambulance service. As per the patient’s conditions, 2-3 family members are permitted to accompany the patient. Our efficient team daily updates them about the patient’s condition. The experts at Human Care Cardiac and Air Ambulance Services take the patient’s brief history of the past and present medical records and then prepare the action plan as per the same.

Our AC ambulance mimics the ICU (Intensive Care Unit) environment. Every ambulance of ours has specialist doctors such as Neurologists, Cardiologists, Orthopaedic, Anesthesiologist, and critical care consultants etc, as well as the experienced paramedics or nurse. Before moving with the patient to the desired location, our experts always ask for the prescription which was offered through the current serving doctors and then take every medicine prescribed by him.

At times, we might feel contacting the doctor who is currently serving the patient so it is compulsory for giving his contact details while booking our service.
Human Care Cardiac and Air Ambulance Services are committed to offering critical and excellent care services in emergencies with sheer ease and comfort.
Our Company is recognized for its passionate care we practice for improving the standard in critical care transport besides offering careful and safe support in the non-emergency circumstance.
The positive and encouraging reviews from our previous clients are the ultimate testimony to the promise of quality in our service.
As per the patient’s disease and condition, we let the related expert doctor accompany the patient.
Once you book the Ground Ambulance services at Human Care Cardiac and Air Ambulance Services, you don’t have to worry about the patient’s safety.
Every little thing is taken care of by the dedicated staff and doctors at Human Care Cardiac and Air Ambulance Services. Not only our staff is prompt but is also courteous at offering any help. We strive to offer proficient, professional, and prompt medical care. Also, the fact that our Company is powered and backed by the teams of professional industry experts, qualified supporting staff, and internationally trained staff members makes us the most trustworthy name in the market.

Human Care Cardiac and Air Ambulance Services render hi-tech ground ambulance services in several locations as well as other regions across the country.
Every patient in need can conveniently reach out to us for availing relocation to various medical destinations and get top-quality treatment without any hassle.
Our quick and safe patient transfer ground ambulance services are available at a very low price so that one can choose us and do not get bankrupt.
The fast and immediate transfer of patients within and outside the country is made worries-free and easy. Human Care Cardiac and Air Ambulance Services are run by well-qualified doctors and that makes it among the most responsible Company across the country. Our years of proven experience in the field of ground and air ambulance services have made us a pro in offering 100% transparent services. What’s more? There are no hidden costs but only the promise of top-quality medical services.       </p>
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

export default GroundAmbulance
