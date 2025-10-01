import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Heart, Clock, Globe, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Button } from '../components/ui/button';
// import  from '../assets/OurStoryAirAmbulanceIndia.png';
import humancareabout from '../assets/OurStoryAirAmbulanceIndia.png'


const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We provide every patient with dignity, respect, and expert care throughout their air ambulance or medical transport journey, supported by trained medical escort professionals.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Our strict safety protocols guarantee the highest standards in emergency services, ground ambulance support, and international transfer.'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'In time-critical situations, our team ensures immediate action for fast and reliable medical transport.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With extensive worldwide coverage, we offer seamless international transfer and medical repatriation services, ensuring patients receive the care they need wherever they are.'
    }
  ];

  const achievements = [
    { number: '20+', label: 'Years of Experience' },
    { number: '10,000+', label: 'Successful Transports' },
    { number: '50+', label: 'Medical Professionals' },
    { number: '25+', label: 'Aircraft Fleet' }
  ];

  const certifications = [
    'Decades of Experience',
    '17,000+ successful repatriations ',
    'Globally Trusted',
    '24/7 Global Support',
    'Fast & Reliable Response',
    'Complete Medical Solutions'
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Mumbai, India: Humancare Air Ambulance</title>
        <meta
          name="description"
          content="Humancare is on a mission to save lives through various medical services like Air Ambulance, Ground Ambulance, Transfer etc in India."
        />
        <meta
          name="keywords"
          content="about air ambulance, humancare Mumbai, medical transport India, emergency ambulance services, ground ambulance, patient transfer"
        />
        <meta
          property="og:title"
          content="About Us - Mumbai, India: Humancare Air Ambulance"
        />
        <meta
          property="og:description"
          content="Humancare is on a mission to save lives through various medical services like Air Ambulance, Ground Ambulance, Transfer etc in India."
        />
        <link rel="canonical" href="https://www.humancareairambulance.com/about" />
      </Helmet>


      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary-red">Humancare</span>
          </h1>
        }
        subtitle="For over 15 years, Humancare World wide has led air ambulance and medical transport services, providing fast emergency services, expert medical escort, and reliable ground ambulance support for safe domestic and international transfers."
      />

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is to provide safe, rapid, and compassionate air ambulance and medical transport, with ground 
              ambulance support and expert medical escort, for both domestic and international transfers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="w-full  object-cover rounded-xl shadow-healthcare"
                alt="Humancare"
                src={humancareabout}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Founded in 2004 by Dr. Hidayat Khan, Humancare began as Mumbai’s first private ground ambulance service, revolutionizing emergency medical transport in India. Recognizing the critical need for rapid, professional care, we expanded into air ambulance services, marking a pivotal moment with our inaugural international flight from India to France.</p>
              <p>Today, Humancare stands as a leading provider of medical transport, offering comprehensive services that include:</p>
              <p>Air Ambulance: Equipped aircraft with ICU facilities for critical care during transit.


Medical Repatriation: Safe and efficient transfer of patients across borders.

<br/>Ground Ambulance: 24/7 emergency and non-emergency transportation.

<br/>Medical Escort: Trained professionals accompanying patients during travel.

<br/>Hospital Assistance: Coordination with medical facilities for seamless care.

<br/>Tele Consultation & House-Call: Remote medical advice and in-home care services.

<br/>Home Healthcare: Post-hospitalization care in the comfort of your home.

<br/>Mortal Remains Transfer: Dignified and respectful repatriation services.

<br/>Corporate Medical Solutions: Tailored healthcare services for organizations.</p>
            
            <p>With over 200 dedicated professionals, including ICU doctors, flight nurses, and critical care paramedics, we operate globally, ensuring that every patient receives the highest standard of care during their journey.
<br/>At Humancare, we believe that when lives are at stake, excellence in medical transport is not optional it’s a commitment.</p>
              
              
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
At Humancare World Wide, we bring years of expertise and compassion to every mission. With 17,000+ successful repatriations, 24/7 support, and complete end-to-end care, we are trusted globally for safe, reliable, and dignified medical assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{certification}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
Our 24/7 flight coordinators handle every detail to ensure a safe and seamless medical transport experience.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="cta-button text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <a href="tel:+919699999067">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Immediate Help
                </a>
              </Button>
              <Button
                asChild
                variant="outline"

                className="border-white text-white hover:text-blue px-8 py-4 text-lg rounded-full"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
