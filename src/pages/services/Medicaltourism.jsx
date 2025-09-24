import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'
import PageBanner from '../../components/PageBanner'
import { ArrowRight, Plane, Globe, CheckCircle, Plus, Minus, ClipboardPlus, Activity, ShieldEllipsis } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
function Medicaltourism() {
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

  

    return (

        <>

            <Helmet>
                <title>Medical Tourism Services - Mumbai, India: Human Care Air Ambulance</title>
                <meta name="description" content="Get top-notch Medical Tourism to India with Human Care Air Ambulance Services, your trusted facilitator for premier treatment and services. Call Now!" />
            </Helmet>

            <PageBanner
                titleComponent={
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Medical <span className="text-primary-red">Tourism</span>
                    </h1>
                }
                subtitle=" Best service globally"
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
                                Exclusive Medical Tourism Services by Human Care
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Human Care Cardiac and Air Ambulance Services have the exclusive division of specialized surgeons and doctors devoted to the requirements of those patients who wish to opt for the best Medical Tourism services. We act as the facilitator between visitors or patients along with several hospitals recommending several alternatives available as per the needed treatment or any other services. With the required expertise to offer the most suitable Medical Tourism services at the right cost and at the right time, our Company has been able to stand apart from others in the industry.
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
                                We make it enjoyable to get care
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We work with specialist doctors who are all board-certified by famous medical institutions as well as have thorough experience in treating any patient. Our Company possesses internationally certified, world-class medical experts along with state-of-the-art, modern facilities. Not only do we offer world-class treatment but also make all this available at a much lesser rate as compared to others.                            </p>

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
                                Your Trusted Partner in Global Medical Tourism                        </h2>
                            <p className="text-center text-lg text-gray-600 mb-8">
                                The ever-increasing demand of the entire world in the 21st century enables our experts to expand the network as well as serve the world as per their expectations. The vision of Human Care Cardiac and Air Ambulance Services is to be the preferred Medical Tourism Services Provider”. Over the years, it is our promise of high-quality and on-time services that has made us the most responsible medical services provider.

                                Human Care Cardiac and Air Ambulance Services offer end-to-end, seamless assistance in opting for the right doctor.
                                From the warmth of the greeting at the airport to the registration as well as discharge, our Company aims to create the best experience for the medical tourism guests.
                                The committed medical tourism patient helpdesk is available 24×7.
                                Professional opinion along with treatment estimate.
                                Tele-consultations with the help of teleconference and video calls with the treating doctors.
                                Our detailed treatment schedule is personalized as per the requirements of the patients.
                                Every medical tour organized by us is handled by experienced IT professionals and doctors who have years of experience in healthcare services. Affordable cost, prompt, and best quality treatment is always the key elements for selecting treatment in a foreign country. Keeping this in mind, Human Care Cardiac and Air Ambulance Services have especially emphasized these aspects in opting for several doctors and hospitals to satisfy your requirements.

                                Facing the challenge of getting to your hospital for a specific type of treatment? Give us a call and let us help you out.
                                Our well-trained staff members have been in the industry of health care services for years.
                                Also, a majority of our team members are the ex-hospital employees and are well versed with the regular activities at the hospitals.
                                Human Care Cardiac and Air Ambulance Services are devoted to delivering the best possible experience of medical tourism to patients from throughout the world.
                                We will look for the most suitable healthcare availability as well as offer help throughout the medical tour’s duration.
                                It means that now, you do not have to worry about anything as well as can focus on recovery and treatment
                                With our exceptional services, we cover an extensive sector of health-oriented tourism that ranges from health-conductive and preventive treatment to the rehabilitation as well as curative travel forms. Our Company assists people in getting benefits from quality medical tourism alternatives at the lowest possible cost. Client satisfaction is, and always will be, the most vital dimension in the preparation of our medical tourism packages.

                                We are highly aware of the fact that clients seek satisfaction and their requirements for the same are quite diverse. That is why our Company always aspires to offer the best possible medical tourism alternatives along with packages customized for the patients’ needs so that they feel satisfied with our quality deals for medical tourism.

                                Still, wondering why clients opt for our medical tourism services? We give them plenty of reasons –

                                Amazing healthcare quality
                                World-class treatment availability
                                Cost savings
                                Decreased waiting times
                                With the drive to make you feel relax, the experts at Human Care Cardiac and Air Ambulance Services personally take care of you and offer the best-in-class medical tourism services for several diseases associated with Liver Transplant and Orthopaedic Surgery, etc.                   </p>
                        </motion.div>


                    </div>
                </div>
            </section>
           
            <ContactForm />
        </>

    )
}

export default Medicaltourism
